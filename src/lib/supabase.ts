import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://xpdwcskegeypkwdhfpve.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwZHdjc2tlZ2V5cGt3ZGhmcHZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwMjU1MDYsImV4cCI6MjA3MzYwMTUwNn0.Nfs_-93Re6oyo9Qabxu084baWMMJ2R7I7mlaXHaEhlk';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
