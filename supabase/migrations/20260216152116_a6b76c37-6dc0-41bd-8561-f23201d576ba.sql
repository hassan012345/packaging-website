
CREATE TABLE public.quote_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_type TEXT NOT NULL,
  length NUMERIC,
  width NUMERIC,
  height NUMERIC,
  dimension_unit TEXT DEFAULT 'inches',
  colors TEXT,
  quantity INTEGER NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public quote form)
CREATE POLICY "Anyone can submit a quote request"
ON public.quote_requests
FOR INSERT
WITH CHECK (true);

-- Only authenticated admin can read (no public reads)
-- For now, no SELECT policy so data stays private
