
import { createClient } from '@supabase/supabase-js';

// Using the updated Supabase credentials from integrations/supabase/client.ts
const supabaseUrl = 'https://aeclpuhqkoobrfodtpxc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlY2xwdWhxa29vYnJmb2R0cHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5NjY1NDAsImV4cCI6MjA1ODU0MjU0MH0.L7oYYXfI6jc0ykjv9jdzTuC2kd6hbekMhlP9Wq5TmPI';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
