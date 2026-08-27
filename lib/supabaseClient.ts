import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://sgpvgfocpndfqpvfrfgh.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_JoH1z-umsoH3F6Xfg42WPg_h8AHeFpI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
