
import { createClient } from '@supabase/supabase-js';

// These should be replaced with environment variables in a production environment
const supabaseUrl = 'https://aeclpuhqkoobrfodtpxc.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'your-public-anon-key';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
