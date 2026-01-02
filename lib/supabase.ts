import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zgavmhsuhyrggkwgobyi.supabase.co'
const supabaseKey = 'sb_publishable_uoy9aaJZwkTox7erVaTBJQ_-NSP-Frp'

// Khởi tạo một instance duy nhất và export nó
export const supabase = createClient(supabaseUrl, supabaseKey)