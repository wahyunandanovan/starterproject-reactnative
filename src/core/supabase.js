import {createClient} from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SUPABASE_URL = 'https://giqowynbaiuszhoajvfg.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpcW93eW5iYWl1c3pob2FqdmZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTAyNjI0OTIsImV4cCI6MTk2NTgzODQ5Mn0.Bmrht_EABBQJRbo_rP6mhrJT0-VLtyq2EJnshXIcC90';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  localStorage: AsyncStorage,
  detectSessionInUrl: false,
});

export default supabase;
