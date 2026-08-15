CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  firmanavn text NOT NULL,
  hjemmeside text,
  telefon text NOT NULL,
  email text NOT NULL,
  services text NOT NULL,
  maal text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access" ON public.contact_submissions
  FOR ALL TO service_role USING (true) WITH CHECK (true);