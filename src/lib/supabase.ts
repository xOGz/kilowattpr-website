import { createClient } from '@supabase/supabase-js'

// Public anon key — safe to expose (RLS protects the data)
const supabaseUrl = 'https://kfraykhgdojuvuhprlls.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmcmF5a2hnZG9qdXZ1aHBybGxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0OTIyNjMsImV4cCI6MjA5MDA2ODI2M30.bD1Fm7RAM_6n9L-wPEh10m9HpxkR0us5OR-KW3Seg4c'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
