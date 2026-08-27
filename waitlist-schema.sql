-- SQL Schema to create the Beta Waitlist table
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard)

CREATE TABLE IF NOT EXISTS public.beta_waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  source TEXT, -- "How they found out about us" (e.g. Google, Social Media, Bike Club, Friend)
  additional_notes TEXT, -- Any optional notes or comments
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS) to protect user data
ALTER TABLE public.beta_waitlist ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous users (unauthenticated web visitors) to insert their info
CREATE POLICY "Allow public inserts into beta_waitlist" 
ON public.beta_waitlist 
FOR INSERT 
TO public 
WITH CHECK (true);

-- Allow authenticated users / dashboard administrators / service-role to read the waitlist
CREATE POLICY "Allow authenticated reads from beta_waitlist" 
ON public.beta_waitlist 
FOR SELECT 
TO authenticated, service_role 
USING (true);
