import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://yqmpjdcmzfbosbykhxdf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxbXBqZGNtemZib3NieWtoeGRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyMDI2MzgsImV4cCI6MjAzMjc3ODYzOH0.X3V-w_8_qNd6Ro1Kj9Y9xDy1sw-LBZZhohqGWCTtpO8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
