
CREATE UNIQUE INDEX IF NOT EXISTS waitlist_signups_email_key ON public.waitlist_signups (lower(email));

CREATE OR REPLACE FUNCTION public.join_waitlist(
  _name text,
  _email text,
  _phone text DEFAULT NULL,
  _role text DEFAULT NULL,
  _revenue text DEFAULT NULL,
  _urgency text DEFAULT NULL
)
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _pos bigint;
  _normalized_email text := lower(trim(_email));
BEGIN
  SELECT position INTO _pos
  FROM public.waitlist_signups
  WHERE lower(email) = _normalized_email
  LIMIT 1;

  IF _pos IS NOT NULL THEN
    RETURN _pos;
  END IF;

  INSERT INTO public.waitlist_signups (name, email, phone, role, revenue, urgency)
  VALUES (trim(_name), _normalized_email, _phone, _role, _revenue, _urgency)
  RETURNING position INTO _pos;

  RETURN _pos;
END;
$$;

REVOKE ALL ON FUNCTION public.join_waitlist(text, text, text, text, text, text) FROM public;
GRANT EXECUTE ON FUNCTION public.join_waitlist(text, text, text, text, text, text) TO anon, authenticated;
