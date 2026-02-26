import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://knbumhhimxtrcfbfpgtg.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtuYnVtaGhpbXh0cmNmYmZwZ3RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMDcxMDksImV4cCI6MjA4NzY4MzEwOX0.vRzO-9BnPhnYINA8XS79zcI6WjTxwCDjAOtbolxahFM";

export const supabase = createClient(supabaseUrl, supabaseKey);