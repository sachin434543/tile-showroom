import { NextResponse } from 'next/server';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/server';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const name = typeof body?.name === 'string' ? body.name.trim() : '';
  const phone = typeof body?.phone === 'string' ? body.phone.trim() : '';
  const message = typeof body?.message === 'string' ? body.message.trim() : '';

  if (!name || !phone || !message) {
    return NextResponse.json({ saved: false, error: 'Missing fields' }, { status: 400 });
  }

  if (!isSupabaseConfigured) {
    return NextResponse.json({ saved: false });
  }

  const supabase = await createClient();
  const { error } = await supabase.from('inquiries').insert({ name, phone, message });

  return NextResponse.json({ saved: !error });
}
