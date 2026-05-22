
-- Add access_granted to waitlist_signups
ALTER TABLE public.waitlist_signups
  ADD COLUMN IF NOT EXISTS access_granted boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS access_granted_at timestamptz;

-- Enable pg_net for HTTP calls from triggers
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Trigger function: fires on new signup and on access_granted flipping to true
CREATE OR REPLACE FUNCTION public.notify_waitlist_email()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  fn_url text := 'https://vlwtnlpyugkucnmornuu.supabase.co/functions/v1/send-email';
  payload jsonb;
  template_name text;
BEGIN
  IF TG_OP = 'INSERT' THEN
    template_name := 'welcome';
    -- set access_granted_at if it gets toggled later
  ELSIF TG_OP = 'UPDATE' AND NEW.access_granted = true AND COALESCE(OLD.access_granted, false) = false THEN
    template_name := 'access_granted';
    NEW.access_granted_at := COALESCE(NEW.access_granted_at, now());
  ELSE
    RETURN NEW;
  END IF;

  payload := jsonb_build_object(
    'template', template_name,
    'record', jsonb_build_object(
      'id', NEW.id,
      'name', NEW.name,
      'email', NEW.email,
      'phone', NEW.phone,
      'role', NEW.role,
      'revenue', NEW.revenue,
      'urgency', NEW.urgency,
      'position', NEW.position,
      'created_at', NEW.created_at,
      'access_granted', NEW.access_granted,
      'access_granted_at', NEW.access_granted_at
    )
  );

  PERFORM net.http_post(
    url := fn_url,
    headers := '{"Content-Type":"application/json"}'::jsonb,
    body := payload
  );

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS waitlist_signups_email_insert ON public.waitlist_signups;
CREATE TRIGGER waitlist_signups_email_insert
AFTER INSERT ON public.waitlist_signups
FOR EACH ROW EXECUTE FUNCTION public.notify_waitlist_email();

DROP TRIGGER IF EXISTS waitlist_signups_email_access ON public.waitlist_signups;
CREATE TRIGGER waitlist_signups_email_access
BEFORE UPDATE OF access_granted ON public.waitlist_signups
FOR EACH ROW EXECUTE FUNCTION public.notify_waitlist_email();
