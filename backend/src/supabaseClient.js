import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ucusngylouypldsoltnd.supabase.co';
const supabaseAnonKey =  process.env.SUPABASE_KEY;

export const supabase = createClient('https://ucusngylouypldsoltnd.supabase.co',  process.env.SUPABASE_KEY);

export const signInWithGoogle = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'google'
    });
    if (error) console.log('Error:', error);
    else console.log('User:', user);
};

export const signInWithFacebook = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'facebook'
    });
    if (error) console.log('Error:', error);
    else console.log('User:', user);
};
