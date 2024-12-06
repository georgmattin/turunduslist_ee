import { serviceSupabase } from '@/lib/supabaseClient'
import { NextResponse } from 'next/server'

export async function GET() {
  const csvString = "col1,col2\nval1,val2"

  // Lae CSV üles kasutades Service Role klienti
  const { error } = await serviceSupabase.storage.from('csv-bucket').upload('test.csv', new Blob([csvString]))

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ status: 'uploaded' })
}
