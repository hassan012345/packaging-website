INSERT INTO storage.buckets (id, name, public) VALUES ('quote-designs', 'quote-designs', true);

CREATE POLICY "Anyone can upload quote designs" ON storage.objects
  FOR INSERT TO public
  WITH CHECK (bucket_id = 'quote-designs');

CREATE POLICY "Anyone can read quote designs" ON storage.objects
  FOR SELECT TO public
  USING (bucket_id = 'quote-designs');