"use client"

import type React from "react"
import { useLayoutEffect, useRef, useState } from "react"

const NAME_WORDS = ["JEFFERSON", "L.", "BARNIZO"]
const STACK = ["Next.js", "React", "TypeScript", "Node.js", "Firebase", "PostgreSQL"]

// Typewriter sequence: each phrase is typed, held, then deleted; the last one stays
const PHRASES = ["Building modern digital experiences.", "Welcome to my portfolio."]
const TYPE_START = 1800
const TYPE_MS = 38
const HOLD_MS = 1100
const DELETE_MS = 18
const PHRASE_GAP = 250
const TAGLINE_WIDTH = Math.max(...PHRASES.map((p) => p.length))

// Shared with the inline script in app/layout.tsx
const STORAGE_KEY = "jb-splash-seen"

const MIN_DURATION = 6000
const MAX_DURATION = 9000
// Content fades, then the two panels part (keep in sync with the CSS)
const EXIT_DURATION = 1250
const HERO_RELEASE_DELAY = 450
const REDUCED_MIN_DURATION = 1200
const REDUCED_EXIT_DURATION = 300

type Phase = "active" | "exiting" | "done"

type Particle = { x: number; y: number; vx: number; vy: number; r: number }

const PROGRESS_LABELS: [number, string][] = [
  [0.25, "Initializing"],
  [0.5, "Loading projects"],
  [0.75, "Compiling experience"],
  [1, "Almost ready"],
]

function typedText(t: number) {
  let at = TYPE_START
  if (t < at) return ""
  for (let i = 0; i < PHRASES.length; i++) {
    const phrase = PHRASES[i]
    const typeEnd = at + phrase.length * TYPE_MS
    if (t < typeEnd) return phrase.slice(0, Math.floor((t - at) / TYPE_MS))
    if (i === PHRASES.length - 1) return phrase
    const holdEnd = typeEnd + HOLD_MS
    if (t < holdEnd) return phrase
    const deleteEnd = holdEnd + phrase.length * DELETE_MS
    if (t < deleteEnd) return phrase.slice(0, phrase.length - Math.floor((t - holdEnd) / DELETE_MS))
    at = deleteEnd + PHRASE_GAP
    if (t < at) return ""
  }
  return PHRASES[PHRASES.length - 1]
}

export function SplashScreen() {
  const [phase, setPhase] = useState<Phase>("active")
  const rootRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const pctRef = useRef<HTMLSpanElement>(null)
  const typeRef = useRef<HTMLSpanElement>(null)
  const finishRef = useRef<() => void>(() => {})

  useLayoutEffect(() => {
    const html = document.documentElement
    let seen = html.hasAttribute("data-splash-seen")
    try {
      seen = seen || sessionStorage.getItem(STORAGE_KEY) === "1"
    } catch {}

    if (seen) {
      html.removeAttribute("data-splash-active")
      setPhase("done")
      return
    }

    const root = rootRef.current!
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const minDuration = reduced ? REDUCED_MIN_DURATION : MIN_DURATION
    const exitDuration = reduced ? REDUCED_EXIT_DURATION : EXIT_DURATION

    html.setAttribute("data-splash-active", "")
    const prevOverflow = html.style.overflow
    html.style.overflow = "hidden"

    let raf = 0
    let exitTimer: ReturnType<typeof setTimeout> | undefined
    let heroTimer: ReturnType<typeof setTimeout> | undefined
    let exiting = false
    let ready = document.readyState === "complete"
    const onLoad = () => {
      ready = true
    }
    if (!ready) window.addEventListener("load", onLoad, { once: true })

    const finish = () => {
      if (exiting) return
      exiting = true
      setPhase("exiting")
      // Let the landing hero start its entrance as the panels part
      heroTimer = setTimeout(() => html.removeAttribute("data-splash-active"), reduced ? 0 : HERO_RELEASE_DELAY)
      try {
        sessionStorage.setItem(STORAGE_KEY, "1")
      } catch {}
      exitTimer = setTimeout(() => {
        cancelAnimationFrame(raf)
        html.setAttribute("data-splash-seen", "")
        html.style.overflow = prevOverflow
        setPhase("done")
      }, exitDuration)
    }
    finishRef.current = finish

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") finish()
    }
    window.addEventListener("keydown", onKey)

    // Pointer tracking (mouse and touch)
    const pointer = { x: 0, y: 0, sx: 0, sy: 0, active: false, seen: false }
    const onPointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
      if (!pointer.seen) {
        pointer.seen = true
        pointer.sx = e.clientX
        pointer.sy = e.clientY
      }
      if (!pointer.active) {
        pointer.active = true
        root.setAttribute("data-pointer", "")
      }
    }
    const onPointerEnd = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.type === "pointerleave") {
        pointer.active = false
        root.removeAttribute("data-pointer")
      }
    }
    root.addEventListener("pointermove", onPointerMove, { passive: true })
    root.addEventListener("pointerdown", onPointerMove, { passive: true })
    root.addEventListener("pointerup", onPointerEnd)
    root.addEventListener("pointercancel", onPointerEnd)
    root.addEventListener("pointerleave", onPointerEnd)

    // Particle field
    const canvas = canvasRef.current!
    const ctx = reduced ? null : canvas.getContext("2d")
    let w = 0
    let h = 0
    let particles: Particle[] = []

    const resize = () => {
      if (!ctx) return
      const nw = root.clientWidth
      const nh = root.clientHeight
      const dpr = Math.min(window.devicePixelRatio || 1, nw < 768 ? 1.5 : 2)
      canvas.width = Math.round(nw * dpr)
      canvas.height = Math.round(nh * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      if (!particles.length) {
        const count = Math.round(Math.min(70, Math.max(22, (nw * nh) / 16000)))
        particles = Array.from({ length: count }, () => ({
          x: Math.random() * nw,
          y: Math.random() * nh,
          vx: (Math.random() - 0.5) * 0.02,
          vy: (Math.random() - 0.5) * 0.02,
          r: Math.random() * 1.1 + 0.5,
        }))
      } else if (w && h) {
        for (const p of particles) {
          p.x *= nw / w
          p.y *= nh / h
        }
      }
      w = nw
      h = nh
    }
    resize()
    window.addEventListener("resize", resize)

    const LINK = w < 640 ? 90 : 120
    const POINTER_LINK = 170
    const REPEL = 120

    const drawParticles = (dt: number) => {
      if (!ctx) return
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        if (pointer.active) {
          const dx = p.x - pointer.x
          const dy = p.y - pointer.y
          const d = Math.hypot(dx, dy)
          if (d < REPEL && d > 0.1) {
            const force = (1 - d / REPEL) * 0.05 * dt
            p.x += (dx / d) * force
            p.y += (dy / d) * force
          }
        }
        p.x += p.vx * dt
        p.y += p.vy * dt
        if (p.x < -10) p.x = w + 10
        else if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        else if (p.y > h + 10) p.y = -10
      }

      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK) {
            ctx.strokeStyle = `rgba(212, 165, 116, ${(1 - d / LINK) * 0.16})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        if (pointer.active) {
          const d = Math.hypot(a.x - pointer.sx, a.y - pointer.sy)
          if (d < POINTER_LINK) {
            ctx.strokeStyle = `rgba(212, 165, 116, ${(1 - d / POINTER_LINK) * 0.35})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(pointer.sx, pointer.sy)
            ctx.stroke()
          }
        }
      }

      ctx.fillStyle = "rgba(255, 236, 209, 0.55)"
      ctx.beginPath()
      for (const p of particles) {
        ctx.moveTo(p.x + p.r, p.y)
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      }
      ctx.fill()
    }

    // Main loop: progress, pointer easing, particles
    const start = performance.now()
    let last = start
    let progress = 0
    let completeAt = 0
    let labelIndex = -1
    let typed = ""
    if (reduced) typeRef.current!.textContent = PHRASES[0]

    const tick = (now: number) => {
      const dt = Math.min(now - last, 50)
      last = now
      const elapsed = now - start

      const done = (ready && elapsed >= minDuration) || elapsed >= MAX_DURATION
      const target = done ? 1 : Math.min(0.9, (elapsed / minDuration) * 0.9)
      progress += (target - progress) * Math.min(1, dt * (done ? 0.012 : 0.006) * (reduced ? 3 : 1))
      if (done && progress > 0.995) {
        progress = 1
        if (!completeAt) completeAt = now
      }

      fillRef.current!.style.transform = `scaleX(${progress})`
      const pct = Math.round(progress * 100)
      pctRef.current!.textContent = `${pct}%`
      trackRef.current!.setAttribute("aria-valuenow", String(pct))
      const nextLabel = progress >= 1 ? PROGRESS_LABELS.length : PROGRESS_LABELS.findIndex(([max]) => progress < max)
      if (nextLabel !== labelIndex) {
        labelIndex = nextLabel
        labelRef.current!.textContent = PROGRESS_LABELS[nextLabel]?.[1] ?? "Ready"
      }

      if (!reduced) {
        const nextTyped = typedText(elapsed)
        if (nextTyped !== typed) {
          typed = nextTyped
          typeRef.current!.textContent = typed
        }

        const ease = Math.min(1, dt * 0.008)
        pointer.sx += (pointer.x - pointer.sx) * ease
        pointer.sy += (pointer.y - pointer.sy) * ease
        glowRef.current!.style.transform = `translate3d(${pointer.sx}px, ${pointer.sy}px, 0) translate(-50%, -50%)`
        if (pointer.seen && w && h) {
          const px = (pointer.sx / w - 0.5) * 2
          const py = (pointer.sy / h - 0.5) * 2
          parallaxRef.current!.style.transform = `translate3d(${px * -8}px, ${py * -8}px, 0)`
        }
        drawParticles(dt)
      }

      if (completeAt && now - completeAt > 200) finish()
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(exitTimer)
      clearTimeout(heroTimer)
      window.removeEventListener("load", onLoad)
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("resize", resize)
      root.removeEventListener("pointermove", onPointerMove)
      root.removeEventListener("pointerdown", onPointerMove)
      root.removeEventListener("pointerup", onPointerEnd)
      root.removeEventListener("pointercancel", onPointerEnd)
      root.removeEventListener("pointerleave", onPointerEnd)
      html.removeAttribute("data-splash-active")
      html.style.overflow = prevOverflow
    }
  }, [])

  if (phase === "done") return null

  let charIndex = 0

  return (
    <div
      ref={rootRef}
      className="jb-splash"
      data-state={phase}
      role="dialog"
      aria-modal="true"
      aria-label="Loading Jefferson L. Barnizo's portfolio"
    >
      <div className="jb-splash__panel jb-splash__panel--top" aria-hidden="true" />
      <div className="jb-splash__panel jb-splash__panel--bottom" aria-hidden="true" />
      <div className="jb-splash__seam" aria-hidden="true" />

      <div className="jb-splash__scene" aria-hidden="true">
        <div className="jb-splash__aurora" />
        <div className="jb-splash__grid" />
        <canvas ref={canvasRef} className="jb-splash__canvas" />
        <div ref={glowRef} className="jb-splash__glow" />
        <div className="jb-splash__scan" />
        <div className="jb-splash__vignette" />
        <div className="jb-splash__frame">
          <span className="jb-splash__corner jb-splash__corner--tl" />
          <span className="jb-splash__corner jb-splash__corner--tr" />
          <span className="jb-splash__corner jb-splash__corner--bl" />
          <span className="jb-splash__corner jb-splash__corner--br" />
          <span className="jb-splash__label jb-splash__label--left">JLB — Portfolio</span>
          <span className="jb-splash__label jb-splash__label--right" suppressHydrationWarning>
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>

      <div className="jb-splash__content">
        <div ref={parallaxRef} className="jb-splash__parallax">
          <div className="jb-splash__mark-wrap" aria-hidden="true">
            <span className="jb-splash__ripple" />
            <div className="jb-splash__mark">
              <span className="jb-splash__mark-inner">JB</span>
            </div>
          </div>

          <p className="jb-splash__name" aria-label="Jefferson L. Barnizo">
            {NAME_WORDS.map((word, w) => (
              <span
                key={word}
                aria-hidden="true"
                className={`jb-splash__word${w === NAME_WORDS.length - 1 ? " jb-splash__word--accent" : ""}`}
              >
                {[...word].map((char, c) => (
                  <span key={c} className="jb-splash__char" style={{ "--i": charIndex++ } as React.CSSProperties}>
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </p>

          <p className="jb-splash__role">
            <span>Full-Stack Developer</span>
            <span className="jb-splash__dot" aria-hidden="true" />
            <span>IT Professional</span>
          </p>

          <p className="jb-splash__tagline" aria-label={PHRASES[0]}>
            <span className="jb-splash__tagline-box" style={{ "--chars": TAGLINE_WIDTH } as React.CSSProperties}>
              <span className="jb-splash__prompt" aria-hidden="true">
                &gt;
              </span>
              <span ref={typeRef} className="jb-splash__type" aria-hidden="true" />
              <span className="jb-splash__caret" aria-hidden="true" />
            </span>
          </p>

          <ul className="jb-splash__stack" aria-label="Tech stack">
            {STACK.map((tech, i) => (
              <li key={tech} className="jb-splash__chip" style={{ "--i": i } as React.CSSProperties}>
                {tech}
              </li>
            ))}
          </ul>

          <div className="jb-splash__progress">
            <div
              ref={trackRef}
              className="jb-splash__track"
              role="progressbar"
              aria-label="Loading"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={0}
            >
              <div ref={fillRef} className="jb-splash__fill" />
            </div>
            <div className="jb-splash__meta" aria-hidden="true">
              <span ref={labelRef}>Initializing</span>
              <span ref={pctRef} className="jb-splash__pct">
                0%
              </span>
            </div>
          </div>
        </div>
      </div>

      <button type="button" className="jb-splash__skip" onClick={() => finishRef.current()}>
        Skip intro
      </button>
    </div>
  )
}
