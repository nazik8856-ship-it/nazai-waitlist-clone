import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

interface EmailPayload {
  to: string | string[]
  subject: string
  html: string
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    const SENDER_EMAIL = Deno.env.get('SENDER_EMAIL')
    if (!RESEND_API_KEY || !SENDER_EMAIL) {
      return new Response(
        JSON.stringify({ error: 'Missing RESEND_API_KEY or SENDER_EMAIL' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      )
    }

    const body = (await req.json()) as EmailPayload
    if (!body?.to || !body?.subject || !body?.html) {
      return new Response(
        JSON.stringify({ error: 'to, subject and html are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      )
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: SENDER_EMAIL,
        to: Array.isArray(body.to) ? body.to : [body.to],
        subject: body.subject,
        html: body.html,
      }),
    })

    const data = await res.json()
    if (!res.ok) {
      console.error('Resend error:', data)
      return new Response(JSON.stringify({ error: data }), {
        status: res.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('send-email error:', err)
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})