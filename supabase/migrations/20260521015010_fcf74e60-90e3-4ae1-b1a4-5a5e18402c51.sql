CREATE OR REPLACE FUNCTION public.lookup_waitlist_position(_email text)
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _pos bigint;
BEGIN
  SELECT position INTO _pos
  FROM public.waitlist_signups
  WHERE lower(email) = lower(trim(_email))
  LIMIT 1;
  RETURN _pos;
END;
$$;

GRANT EXECUTE ON FUNCTION public.lookup_waitlist_position(text) TO anon, authenticated;