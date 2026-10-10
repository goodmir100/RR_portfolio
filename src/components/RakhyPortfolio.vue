<template>
  <main
    id="stage"
    class="stage relative w-full h-screen bg-[#070b19] text-white overflow-hidden select-none"
    :style="stageStyle"
  >
    <!-- Faint premium technical grid background layer -->
    <div
      class="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:calc(40*var(--u))_calc(40*var(--u))]"
      aria-hidden="true"
    ></div>

    <!-- Soft blue radial glow -->
    <div
      class="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_80%_110%,rgba(37,99,235,0.18),transparent_55%)]"
      aria-hidden="true"
    ></div>

    <!-- 1280 x 640 reference frame, centered in the viewport -->
    <div class="frame absolute">
      <!-- Top Navigation Bar -->
      <header
        class="header absolute top-0 left-0 right-0 flex items-center justify-between border-b border-slate-800/80"
      >
        <div class="flex items-center u-gap-8">
          <h1 class="font-sans tracking-tight text-white u-brand">РАХИ РАХЫМ</h1>
          <span class="text-brand-blue u-star" aria-hidden="true">✦</span>
        </div>
        <div class="font-mono uppercase tracking-widest text-slate-400 u-label">
          Веб-дизайнер и фронтенд-разработчик
        </div>
      </header>

      <!-- Main Dynamic Navigation Grid -->
      <nav class="nav absolute" aria-label="Навигация портфолио">
        <div class="grid grid-cols-3 u-gap-32">
          <!-- Column 1: Live Web Projects -->
          <ul class="flex flex-col u-stack-8">
            <li class="font-mono text-brand-cyan tracking-widest uppercase u-label u-label-head">
              Избранные работы
            </li>
            <li v-for="project in projects" :key="project.href">
              <a
                :href="project.href"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-baseline u-gap-8 text-white hover:text-brand-blue transition-colors font-sans u-body u-w-250"
              >
                <span class="text-brand-blue transition-transform group-hover:translate-x-[calc(2*var(--u))]">→</span>
                <span>{{ project.name }}</span>
                <span class="text-slate-500 u-small">онлайн</span>
              </a>
            </li>
          </ul>

          <!-- Column 2: Profile & Academic Grounding -->
          <ul class="flex flex-col u-stack-8">
            <li class="font-mono text-brand-cyan tracking-widest uppercase u-label u-label-head">
              Профиль и образование
            </li>
            <li class="text-slate-400 font-sans u-body u-w-250">Колледж IITU, 3-й курс</li>
            <li class="text-slate-400 font-sans u-body u-w-250">Специализация: веб-дизайн</li>
            <li class="text-slate-400 font-sans u-body u-w-250">
              <span class="text-slate-200 u-w-500">Vue 3, TypeScript и Tailwind</span>
            </li>
            <li class="text-slate-400 font-sans u-body u-w-250">
              <span class="text-brand-blue" aria-hidden="true">✦</span> Алматы, Казахстан
            </li>
          </ul>

          <!-- Column 3: Contact Registry -->
          <ul class="flex flex-col u-stack-8">
            <li class="font-mono text-slate-400 tracking-widest uppercase u-label u-label-head">
              Контакты
            </li>
            <li>
              <a
                href="mailto:goodmir100@gmail.com"
                class="text-slate-300 hover:text-brand-blue font-sans transition-colors u-body u-w-250"
                >goodmir100@gmail.com</a
              >
            </li>
            <li>
              <a
                href="https://wa.me/77073001386"
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-300 hover:text-brand-blue font-sans transition-colors u-body u-w-250"
                >+7 (707) 300-13-86 (WhatsApp)</a
              >
            </li>
            <li>
              <a
                href="https://github.com/goodmir100"
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-300 hover:text-brand-blue font-sans transition-colors u-body u-w-250"
                >github.com/goodmir100</a
              >
            </li>
          </ul>
        </div>

        <p class="font-sans text-slate-500 tracking-widest uppercase u-tagline u-w-250">
          Потому что структура и качество кода важны
        </p>

        <!-- Direct core call to action (Telegram) -->
        <div class="u-cta-wrap">
          <a
            class="group inline-flex items-center border border-brand-blue bg-brand-blue/10 hover:bg-brand-blue/20 transition-all u-cta"
            href="https://t.me/m1r0t"
            target="_blank"
            rel="noopener noreferrer"
          >
            <!-- Direction arrow icon -->
            <svg
              class="text-brand-blue transition-transform group-hover:translate-x-[calc(4*var(--u))] u-cta-icon"
              viewBox="0 0 9 9"
              aria-hidden="true"
            >
              <path d="M1.6 .4V6H6.2" fill="none" stroke="currentColor" stroke-width="1.35" />
              <path d="M5.6 3.6 8.6 6 5.6 8.4Z" fill="currentColor" />
            </svg>
            <span class="font-sans tracking-wide text-white uppercase u-cta-text u-w-290">
              Написать в Telegram напрямую
            </span>
          </a>
        </div>
      </nav>

      <!-- Bottom Intro & External Footnote Section -->
      <section class="intro absolute flex flex-col u-stack-16" aria-label="Вступление">
        <p class="font-sans text-white leading-none tracking-tighter u-headline u-w-290">
          Ваша аудитория заслуживает лучших интерфейсов<br />
          и вовлекающих сайтов.
        </p>

        <!-- Secondary design folder references -->
        <div class="flex items-center u-gap-16 font-mono text-slate-500 u-label">
          <a
            class="hover:text-white transition-colors"
            href="https://www.figma.com/design/DNmwNk20rI3WDu3jRXynJM/comp-grafics"
            target="_blank"
            rel="noopener noreferrer"
            >Дизайн-система в Figma</a
          >
          <span class="text-brand-blue" aria-hidden="true">✦</span>
          <a
            class="hover:text-white transition-colors"
            href="https://disk.yandex.kz/d/gRUY6S0nVQ_YkQ"
            target="_blank"
            rel="noopener noreferrer"
            >Материалы на Яндекс Диске</a
          >
          <span class="text-brand-blue" aria-hidden="true">✦</span>
          <span class="uppercase">Алматы · KZ</span>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Project {
  name: string;
  href: string;
}

const projects: Project[] = [
  { name: 'DEVSPACEHUB', href: 'https://devspacehub.vercel.app/' },
  { name: 'COMBASKET', href: 'https://combasket.vercel.app/' },
  { name: 'SHISHA DXB', href: 'https://hookahproject.vercel.app/' },
  { name: 'LEARNING SCHOOL', href: 'https://learningschool-pehuyoavc-m1r1.vercel.app/' },
];

/**
 * Inline `--u` uses `svh`. Browsers without svh support drop the invalid
 * declaration and fall back to the `vh` value defined in <style>.
 */
const stageStyle = computed(() => ({
  '--u': 'min(calc(100vw / 1280), calc(100svh / 640))',
}));
</script>

<style scoped>
/* ---------- Scale system (1280 x 640 reference canvas) ---------- */
.stage {
  --u: min(calc(100vw / 1280), calc(100vh / 640));
  --frame-w: calc(1280 * var(--u));
  --frame-h: calc(640 * var(--u));
  --frame-x: calc(50% - 640 * var(--u));
  --frame-y: calc(50% - 320 * var(--u));
  --cu: var(--u);
  --hb: var(--u);
  --tb: var(--u);
  --nu: var(--u);

  /* Brand palette - deep tech blues */
  --bg-dark: #070b19;
  --accent-blue: #2563eb;
  --cyan-glow: #06b6d4;

  height: 100vh;
  height: 100svh;
  background-color: var(--bg-dark);
  font-family: var(--font-sans);
  font-variation-settings: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

.frame {
  left: var(--frame-x);
  top: var(--frame-y);
  width: var(--frame-w);
  height: var(--frame-h);
}

/* ---------- Layout blocks ---------- */
.header {
  height: calc(60 * var(--hb));
  padding: 0 calc(30 * var(--hb));
}

.nav {
  top: calc(110 * var(--nu));
  left: calc(60 * var(--nu));
  right: calc(60 * var(--nu));
}

.intro {
  bottom: calc(48 * var(--tb));
  left: calc(60 * var(--tb));
  right: calc(60 * var(--tb));
}

/* ---------- Spacing utilities in reference pixels ---------- */
.u-gap-8 { column-gap: calc(8 * var(--u)); }
.u-gap-16 { column-gap: calc(16 * var(--u)); }
.u-gap-32 { gap: calc(32 * var(--u)); }
.u-stack-8 > * + * { margin-top: calc(8 * var(--u)); }
.u-stack-16 > * + * { margin-top: calc(16 * var(--u)); }

/* ---------- Typography in reference pixels ---------- */
.u-brand {
  font-size: calc(22 * var(--u));
  font-weight: 500;
  line-height: 1;
}
.u-star {
  font-size: calc(16 * var(--u));
  line-height: 1;
}
.u-label {
  font-size: calc(11 * var(--u));
  font-weight: 280;
  letter-spacing: 0.18em;
}
.u-label-head {
  margin-bottom: calc(8 * var(--u));
}
.u-body {
  font-size: calc(14 * var(--u));
  line-height: 1.45;
}
.u-small {
  font-size: calc(11 * var(--u));
}
.u-tagline {
  margin-top: calc(56 * var(--u));
  font-size: calc(10 * var(--u));
  letter-spacing: 0.2em;
}
.u-headline {
  font-size: calc(34 * var(--u));
  letter-spacing: -0.02em;
}

/* ---------- Call to action ---------- */
.u-cta-wrap {
  margin-top: calc(16 * var(--cu));
}
.u-cta {
  column-gap: calc(12 * var(--cu));
  padding: calc(16 * var(--cu)) calc(32 * var(--cu));
  border-radius: calc(4 * var(--cu));
}
.u-cta-icon {
  width: calc(14 * var(--cu));
  height: calc(14 * var(--cu));
}
.u-cta-text {
  font-size: calc(16 * var(--cu));
  letter-spacing: 0.06em;
}

/* ---------- Solid variable font weights (no outlined fonts) ---------- */
.u-w-250 { font-weight: 250; }
.u-w-280 { font-weight: 280; }
.u-w-290 { font-weight: 290; }
.u-w-500 { font-weight: 500; }

/* ---------- Motion preferences ---------- */
@media (prefers-reduced-motion: reduce) {
  .stage * {
    transition: none !important;
  }
}
</style>
