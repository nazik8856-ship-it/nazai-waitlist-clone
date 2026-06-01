
CREATE OR REPLACE FUNCTION public.waitlist_count()
RETURNS bigint
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT count(*)::bigint FROM public.waitlist_signups;
$$;

REVOKE EXECUTE ON FUNCTION public.waitlist_count() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.waitlist_count() TO anon, authenticated;
