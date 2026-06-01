
-- Explicit deny-all SELECT policy for waitlist_signups (auditable)
DROP POLICY IF EXISTS "No public read of waitlist" ON public.waitlist_signups;
CREATE POLICY "No public read of waitlist"
  ON public.waitlist_signups
  FOR SELECT
  TO anon, authenticated
  USING (false);

-- Replace overly-permissive INSERT policy with validated check
DROP POLICY IF EXISTS "Anyone can join waitlist" ON public.waitlist_signups;
CREATE POLICY "Anyone can join waitlist"
  ON public.waitlist_signups
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name IS NOT NULL AND length(trim(name)) > 0 AND length(name) <= 200
    AND email IS NOT NULL AND length(trim(email)) > 0 AND length(email) <= 320
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  );

-- Lock down internal trigger function (should never be called directly)
REVOKE EXECUTE ON FUNCTION public.notify_waitlist_email() FROM PUBLIC, anon, authenticated;
