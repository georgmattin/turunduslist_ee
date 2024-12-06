import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Põhiklient (anonüümne)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Service Role klient (admin-funktsioonide jaoks)
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY! // Lisa .env faili
export const serviceSupabase = createClient(supabaseUrl, supabaseServiceKey)
