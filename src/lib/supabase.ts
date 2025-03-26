
import { createClient } from '@supabase/supabase-js';

// Using the provided Supabase credentials
const supabaseUrl = 'https://hgpghyfrevahbaeqtprt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhncGdoeWZyZXZhaGJhZXF0cHJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5NjI5NzksImV4cCI6MjA1ODUzODk3OX0.rA9VnaFIuxLo8ZzfSGNOT-kS9ur4RXPYI0FFH_4pxD4';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
