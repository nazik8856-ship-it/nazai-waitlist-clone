import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

interface DirectPayload {
  to: string | string[]
  subject: string
  html: string
}

interface TemplatePayload {
  template: 'welcome' | 'access_granted'
  record: {
    id?: string
    name?: string
    full_name?: string
    email?: string
    email_address?: string
    phone?: string | null
    phone_number?: string | null
    role?: string | null
    revenue?: string | null
    urgency?: string | null
    position?: number
    created_at?: string
    access_granted?: boolean
    access_granted_at?: string
  }
}

type Payload = DirectPayload | TemplatePayload

const SITE_URL = 'https://nazai.net'
const YT = 'https://www.youtube.com/@NazAI-n-8b'
const TT = 'https://www.tiktok.com/@nazai.ai.business'
const CONTACT = 'nazai8832@gmail.com'

function logo() {
  return `
    <div style="display:inline-block;width:72px;height:72px;border-radius:18px;background:#0a0a14;box-shadow:0 0 0 1px rgba(120,120,255,0.35),0 0 24px rgba(140,90,255,0.45);text-align:center;line-height:72px;font-family:Arial,sans-serif;font-weight:800;font-size:34px;color:#5ec3ff">N</div>
    <div style="margin-top:14px;font-family:Arial,sans-serif;font-size:22px;font-weight:700;color:#c9b3ff">NazAI</div>`
}

function footer() {
  return `
    <hr style="border:none;border-top:1px solid rgba(160,120,255,0.25);margin:36px 0 22px" />
    <div style="text-align:center;font-family:Arial,sans-serif;color:#d4c8ff">
      <div style="font-weight:700;color:#c9b3ff;margin-bottom:8px">Stay Connected</div>
      <div style="font-size:14px">
        <a href="${YT}" style="color:#d4c8ff;text-decoration:none">YouTube</a>
        <span style="color:#6b5d99"> • </span>
        <a href="${TT}" style="color:#d4c8ff;text-decoration:none">TikTok</a>
      </div>
      <div style="font-size:13px;color:#a89fd1;margin-top:10px">Contact: <a href="mailto:${CONTACT}" style="color:#a89fd1;text-decoration:none">${CONTACT}</a></div>
      <div style="font-size:12px;color:#7a6fa6;margin-top:18px">© ${new Date().getFullYear()} NazAI. All rights reserved.</div>
    </div>`
}

function shell(inner: string) {
  return `<!doctype html><html><body style="margin:0;padding:0;background:#0a0414">
    <div style="background:radial-gradient(ellipse at top,#3a1466 0%,#1a0833 45%,#0a0414 100%);padding:48px 24px;font-family:Arial,sans-serif;color:#ffffff">
      <div style="max-width:600px;margin:0 auto;text-align:center">
        ${inner}
        ${footer()}
      </div>
    </div>
  </body></html>`
}

function welcomeTemplate(r: TemplatePayload['record']) {
  const name = (r.full_name || r.name || 'there').trim()
  const pos = r.position ?? '—'
  const subject = `Welcome aboard, ${name} — you're #${pos} on the NazAI waitlist`
  const html = shell(`
    ${logo()}
    <h1 style="font-size:36px;line-height:1.15;margin:28px 0 14px;color:#ffffff;font-weight:800">Welcome aboard,<br/>${name}.</h1>
    <p style="font-size:16px;color:#c9b3ff;margin:0 0 28px">You're officially #${pos} on the NazAI waitlist.</p>
    <div style="background:rgba(50,20,90,0.45);border:1px solid rgba(160,120,255,0.25);border-radius:18px;padding:26px;text-align:center;color:#e8e0ff;font-size:15px;line-height:1.6">
      Thank you for joining us on this journey.<br/>
      We're building something truly special — an AI that orchestrates complex business functions with intelligence and elegance.
    </div>
    <p style="font-size:15px;color:#d4c8ff;margin:30px 0 20px;line-height:1.6">You'll be among the first to get access when we launch. We'll keep you updated with important milestones.</p>
    <a href="${SITE_URL}" style="display:inline-block;background:linear-gradient(135deg,#b070ff,#ff6fb5);color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 38px;border-radius:14px;box-shadow:0 10px 30px rgba(180,90,220,0.45)">Visit NazAI</a>
  `)
  return { subject, html }
}

function accessGrantedTemplate(r: TemplatePayload['record']) {
  const first = (r.full_name || r.name || 'there').trim().split(' ')[0]
  const signupDate = r.created_at
    ? new Date(r.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : '—'
  const subject = `The wait is over, ${first} — your NazAI access is live`
  const html = shell(`
    ${logo()}
    <h1 style="font-size:40px;line-height:1.1;margin:28px 0 14px;color:#ffffff;font-weight:800;letter-spacing:-0.5px">THE WAIT IS OVER.</h1>
    <p style="font-size:16px;color:#c9b3ff;margin:0 0 28px">You're officially a NazAI user.</p>
    <div style="background:rgba(50,20,90,0.45);border:1px solid rgba(160,120,255,0.25);border-radius:18px;padding:26px;text-align:center;color:#e8e0ff;font-size:15px;line-height:1.7">
      Hi ${first},<br/>
      You joined our waitlist on ${signupDate}, and we've been quietly building something we think you'll love ever since. As of today, your account is fully activated and ready to use.
    </div>
    <p style="font-size:15px;color:#d4c8ff;margin:30px 0 24px;line-height:1.6">NazAI is built to work the way you think — fast, intuitive, and genuinely useful. No noise. Just results.</p>
    <a href="${SITE_URL}" style="display:inline-block;background:linear-gradient(135deg,#b070ff,#ff6fb5);color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 38px;border-radius:14px;box-shadow:0 10px 30px rgba(180,90,220,0.45)">Visit NazAI</a>
  `)
  return { subject, html }
}

function adminAlert(r: TemplatePayload['record']) {
  const html = `<div style="font-family:Arial,sans-serif;padding:16px">
    <h2>New NazAI waitlist signup (#${r.position ?? '—'})</h2>
    <ul>
      <li><strong>Name:</strong> ${r.full_name || r.name || '—'}</li>
      <li><strong>Email:</strong> ${r.email_address || r.email}</li>
      <li><strong>Phone:</strong> ${r.phone_number || r.phone || '—'}</li>
      <li><strong>Role:</strong> ${r.role || '—'}</li>
      <li><strong>Revenue:</strong> ${r.revenue || '—'}</li>
      <li><strong>Urgency:</strong> ${r.urgency || '—'}</li>
    </ul>
  </div>`
  return { subject: `New signup #${r.position ?? '—'} — ${r.full_name || r.name || r.email}`, html }
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

    const body = (await req.json()) as Payload

    const adminInbox = Deno.env.get('ADMIN_EMAIL') || SENDER_EMAIL

    type Send = { to: string[]; subject: string; html: string }
    const sends: Send[] = []

    // Handle both direct payload and Supabase webhook format
    let record = body.record || body

    if ('template' in body && body.template) {
      if (!record?.email_address && !record?.email) {
        return new Response(JSON.stringify({ error: 'record.email or email_address required' }), {
          status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      }

      const mappedRecord = {
        ...record,
        name: record.full_name || record.name,
        email: record.email_address || record.email,
        phone: record.phone_number || record.phone,
      }

      if (body.template === 'welcome') {
        const t = welcomeTemplate(mappedRecord)
        sends.push({ to: [mappedRecord.email], subject: t.subject, html: t.html })
        
        const a = adminAlert(mappedRecord)
        sends.push({ to: [adminInbox], subject: a.subject, html: a.html })
      } 
      else if (body.template === 'access_granted') {
        const t = accessGrantedTemplate(mappedRecord)
        sends.push({ to: [mappedRecord.email], subject: t.subject, html: t.html })
      }
    } 
    else {
      // Direct payload handling (original behavior)
      const d = body as DirectPayload
      if (!d?.to || !d?.subject || !d?.html) {
        return new Response(JSON.stringify({ error: 'to, subject and html are required' }), {
          status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      }
      const toList = (Array.isArray(d.to) ? d.to : [d.to]).map((a) => a === '__admin__' ? adminInbox : a)
      sends.push({ to: toList, subject: d.subject, html: d.html })
    }

    const results = await Promise.all(sends.map(async (s) => {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ from: SENDER_EMAIL, to: s.to, subject: s.subject, html: s.html }),
      })
      const data = await res.json()
      if (!res.ok) console.error('Resend error:', data)
      return { ok: res.ok, status: res.status, data }
    }))

    const allOk = results.every((r) => r.ok)
    return new Response(JSON.stringify({ success: allOk, results }), {
      status: allOk ? 200 : 502,
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
