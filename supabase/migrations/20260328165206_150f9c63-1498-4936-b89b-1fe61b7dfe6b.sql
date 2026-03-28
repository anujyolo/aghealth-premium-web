
ALTER TABLE public.career_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow service role full access" ON public.career_submissions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
