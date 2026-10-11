<template>
  <div id="top" class="min-h-svh bg-midnight font-sans text-white">
    <!-- ===== Ambient background: blue glows + faint technical grid ===== -->
    <div class="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div
        class="ambient-1 absolute inset-0 bg-[radial-gradient(ellipse_at_15%_-10%,rgba(37,99,235,0.22),transparent_55%)]"
      ></div>
      <div
        class="ambient-2 absolute inset-0 bg-[radial-gradient(ellipse_at_85%_110%,rgba(56,189,248,0.16),transparent_55%)]"
      ></div>
      <div class="blue-grid absolute inset-0"></div>
    </div>

    <!-- ===== Header ===== -->
    <header class="sticky top-0 z-40 border-b border-steel/60 bg-midnight/75 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" class="flex items-center gap-2.5">
          <span class="logo-dot h-2 w-2 rounded-full bg-neon shadow-[0_0_12px_rgba(56,189,248,0.9)]"></span>
          <span class="font-display text-sm font-bold uppercase tracking-[0.18em]">Рахы Рахым</span>
        </a>

        <nav class="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="nav-link text-sm text-ice transition-colors hover:text-neon"
            >{{ link.label }}</a
          >
        </nav>

        <a
          href="https://t.me/m1r0t"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-full border border-neon/40 px-5 py-2 text-sm font-medium text-neon transition-all hover:bg-neon hover:text-midnight hover:shadow-[0_0_24px_rgba(56,189,248,0.5)]"
          >Telegram</a
        >
      </div>
    </header>

    <main class="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
      <!-- ===== Hero: ultra-bold caps with handwritten overlay ===== -->
      <section class="pb-14 pt-16 md:pb-20 md:pt-24">
        <h1 class="rise relative mx-auto max-w-5xl text-center">
          <span
            class="block font-display text-[clamp(1.7rem,5.6vw,4.4rem)] font-extrabold uppercase leading-[1.08] tracking-tight text-white"
            >Веб-дизайнер</span
          >
          <span
            class="block font-display text-[clamp(1.7rem,5.6vw,4.4rem)] font-extrabold uppercase leading-[1.08] tracking-tight text-white"
            >Фронтенд-разработчик</span
          >
          <span
            class="hero-script pointer-events-none absolute inset-0 flex -rotate-3 items-center justify-center font-script text-[clamp(3.2rem,10.5vw,9rem)] font-semibold leading-none"
            >Рахы Рахым</span
          >
        </h1>

        <p class="rise d2 mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-ice md:text-base">
          Создаю элегантные сайты и интерфейсы, которые вовлекают аудиторию и работают на результат.
        </p>
      </section>

      <!-- ===== Diagonal running line ===== -->
      <div class="diag-band" aria-hidden="true">
        <div class="diag-inner">
          <div class="diag-track">
            <div v-for="copy in 4" :key="copy" class="diag-copy">
              <template v-for="(word, i) in marqueeWords" :key="`${copy}-${word}`">
                <span class="diag-word" :class="i % 2 === 1 ? 'diag-word--outline' : ''">{{
                  word
                }}</span>
                <span class="diag-sep">✦</span>
              </template>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== Bento grid ===== -->
      <section class="pb-20 md:pb-28" aria-label="Портфолио">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <!-- 1. About: get to know me -->
          <article
            id="about"
            v-reveal="0"
            class="bento-card flex scroll-mt-28 flex-col p-6 sm:col-span-2 md:p-8 lg:row-span-2"
          >
            <p class="font-script -rotate-2 text-4xl font-semibold leading-none text-neon md:text-5xl">
              познакомимся
            </p>
            <p class="mt-6 text-sm leading-relaxed text-ice md:text-base">
              Меня зовут Рахы Рахым — я веб-дизайнер и фронтенд-разработчик из Алматы. Учусь в
              колледже IITU на третьем курсе, специализация — веб-дизайн. Собираю сайты на Vue 3,
              TypeScript и Tailwind CSS: от первого прототипа до продакшена.
            </p>
            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="chip in stack"
                :key="chip"
                class="rounded-md border border-cobalt/40 bg-cobalt/10 px-3 py-1.5 text-xs font-medium text-electric transition-colors hover:border-neon/60 hover:text-neon"
                >{{ chip }}</span
              >
            </div>
            <p class="mt-auto pt-6 text-xs text-ice/80">
              Колледж IITU, 3-й курс · Специализация: веб-дизайн
            </p>
          </article>

          <!-- 2. Portrait photo -->
          <article v-reveal="90" class="bento-card group min-h-70 lg:row-span-2">
            <img
              src="/portrait.jpeg"
              alt="Портрет Рахы Рахыма"
              class="mono-photo absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-midnight/90 via-midnight/15 to-transparent"
              aria-hidden="true"
            ></div>
            <div class="absolute inset-x-0 bottom-0 p-5">
              <p class="font-display text-xs font-bold uppercase tracking-[0.2em]">Рахы Рахым</p>
              <p class="mt-1.5 text-xs text-ice">Алматы · веб-дизайн</p>
            </div>
          </article>

          <!-- 3. Socials -->
          <article v-reveal="180" class="bento-card flex min-h-50 flex-col p-5">
            <p class="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ice">
              Соцсети
            </p>
            <div class="mt-auto grid grid-cols-2 gap-2.5">
              <a
                v-for="social in socials"
                :key="social.label"
                :href="social.href"
                :target="social.href.startsWith('http') ? '_blank' : undefined"
                :rel="social.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                class="group/icon flex aspect-square items-center justify-center rounded-lg border border-steel bg-abyss/50 transition-all hover:scale-[1.04] hover:border-neon hover:bg-cobalt/20 hover:shadow-[0_0_22px_rgba(56,189,248,0.35)]"
                :aria-label="social.label"
              >
                <svg
                  v-if="social.icon === 'telegram'"
                  class="h-5 w-5 text-ice transition-colors group-hover/icon:text-neon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                  />
                </svg>
                <svg
                  v-else-if="social.icon === 'github'"
                  class="h-5 w-5 text-ice transition-colors group-hover/icon:text-neon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  />
                </svg>
                <svg
                  v-else-if="social.icon === 'whatsapp'"
                  class="h-5 w-5 text-ice transition-colors group-hover/icon:text-neon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  />
                </svg>
                <svg
                  v-else
                  class="h-5 w-5 text-ice transition-colors group-hover/icon:text-neon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3.5 7.5 8.5 5.5 8.5-5.5" />
                </svg>
              </a>
            </div>
          </article>

          <!-- 4. Location / status -->
          <article v-reveal="270" class="bento-card flex min-h-50 flex-col justify-between p-5">
            <div class="flex items-center gap-2.5">
              <span class="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-70"></span>
                <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-neon"></span>
              </span>
              <span class="text-xs font-medium text-neon">Открыт для проектов</span>
            </div>
            <div>
              <p class="font-display text-lg font-bold uppercase tracking-wide">Алматы</p>
              <p class="mt-1.5 text-xs text-ice">Казахстан · GMT+5</p>
            </div>
          </article>

          <!-- 5. Services with currency switch -->
          <article id="services" v-reveal="0" class="bento-card scroll-mt-28 p-6 sm:col-span-2 md:p-7">
            <div class="flex items-center justify-between gap-4">
              <p class="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ice">
                Услуги
              </p>
              <div
                class="flex rounded-lg border border-steel p-0.5"
                role="group"
                aria-label="Выбор валюты"
              >
                <button
                  v-for="option in currencies"
                  :key="option.id"
                  type="button"
                  class="rounded-md px-2.5 py-1 text-[11px] font-semibold transition-colors"
                  :class="currency === option.id ? 'bg-neon text-midnight' : 'text-ice hover:text-white'"
                  :aria-pressed="currency === option.id"
                  @click="currency = option.id"
                >
                  {{ option.label }}
                </button>
              </div>
            </div>

            <ul class="mt-4 divide-y divide-steel/60">
              <li
                v-for="item in services"
                :key="item.title"
                class="flex items-baseline justify-between gap-4 py-2.5"
              >
                <span class="text-sm text-white">{{ item.title }}</span>
                <span class="shrink-0 text-sm font-semibold text-electric">{{
                  currency === 'rub' ? item.rub : item.kzt
                }}</span>
              </li>
            </ul>

            <p class="mt-3 text-xs text-ice/80">
              <span class="text-neon" aria-hidden="true">✦</span> 3 месяца поддержки бесплатно ·
              Бесплатная консультация
            </p>
          </article>

          <!-- 6. CTA -->
          <article
            id="contacts"
            v-reveal="90"
            class="bento-card flex scroll-mt-28 flex-col justify-between gap-6 p-6 sm:col-span-2 md:p-7"
          >
            <div>
              <p class="font-script -rotate-1 text-4xl font-semibold leading-none text-neon md:text-[2.75rem]">
                давайте работать вместе
              </p>
              <p class="mt-3 text-sm leading-relaxed text-ice">
                Бесплатная консультация: разберём задачу и подберём формат. Отвечаю в течение дня.
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <a
                href="https://t.me/m1r0t"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-2 rounded-lg bg-cobalt px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-neon hover:text-midnight hover:shadow-[0_0_28px_rgba(56,189,248,0.5)]"
              >
                Написать в Telegram
                <span class="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
              <a
                :href="mailto"
                class="rounded-lg border border-steel px-5 py-3 text-sm font-medium text-ice transition-colors hover:border-neon/60 hover:text-neon"
                >goodmir100@gmail.com</a
              >
            </div>
          </article>

          <!-- 7. Selected works -->
          <article id="works" v-reveal="0" class="bento-card scroll-mt-28 p-6 sm:col-span-2 md:p-7 lg:col-span-3">
            <div class="flex items-center justify-between gap-4">
              <p class="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ice">
                Избранные работы
              </p>
              <span class="text-[11px] text-ice/70">{{ projects.length }} проектов</span>
            </div>
            <ul class="mt-3 divide-y divide-steel/60">
              <li v-for="project in projects" :key="project.href">
                <a
                  :href="project.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group flex items-center justify-between gap-4 py-2.5"
                >
                  <span class="flex min-w-0 items-baseline gap-3">
                    <span
                      class="truncate text-sm font-medium text-white transition-colors group-hover:text-neon"
                      >{{ project.name }}</span
                    >
                    <span class="hidden shrink-0 text-xs text-ice/70 sm:inline">{{ project.tag }}</span>
                  </span>
                  <span
                    class="shrink-0 text-neon/70 transition-all group-hover:translate-x-1 group-hover:text-neon"
                    aria-hidden="true"
                    >→</span
                  >
                </a>
              </li>
            </ul>
          </article>

          <!-- 8. Photo: process -->
          <article v-reveal="90" class="bento-card group min-h-55 sm:col-span-2 lg:col-span-1">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
              alt="Рабочий процесс: код на экране"
              class="mono-photo absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-midnight/85 via-midnight/10 to-transparent"
              aria-hidden="true"
            ></div>
            <p class="absolute inset-x-0 bottom-0 p-5 text-xs font-medium text-white/90">
              от прототипа до продакшена
            </p>
          </article>

          <!-- 9. Certificates: auto-scrolling carousel in the page body -->
          <article
            id="certificates"
            v-reveal="0"
            class="bento-card flex scroll-mt-28 flex-col gap-6 p-6 md:p-7 lg:col-span-4"
          >
            <div class="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p class="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ice">
                  Сертификаты
                </p>
                <p class="font-script mt-1 text-3xl font-semibold leading-none text-neon md:text-4xl">
                  мои документы
                </p>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-xs text-ice/70">
                  {{ certItems.length }} документов · наведите, чтобы остановить
                </span>
                <button
                  type="button"
                  class="rounded-lg bg-cobalt px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-neon hover:text-midnight hover:shadow-[0_0_28px_rgba(56,189,248,0.5)]"
                  @click="openCert(0)"
                >
                  Смотреть все
                </button>
              </div>
            </div>

            <div class="relative">
              <button
                type="button"
                class="cert-arrow cert-arrow--left"
                aria-label="Предыдущие сертификаты"
                @click="certPrev"
              >
                ←
              </button>

              <div
                ref="certViewport"
                class="cert-carousel"
                @mouseenter="certPaused = true"
                @mouseleave="certPaused = false"
                @focusin="certPaused = true"
                @focusout="certPaused = false"
                @scroll.passive="onCertScroll"
              >
                <div class="cert-track">
                  <button
                    v-for="(item, i) in certItems"
                    :key="item.src"
                    type="button"
                    class="cert-tile group/cert"
                    :aria-label="`Открыть сертификат ${i + 1}`"
                    @click="openCert(i)"
                  >
                    <img
                      :src="item.src"
                      alt=""
                      class="h-full w-full object-cover object-top transition-transform duration-500 group-hover/cert:scale-105"
                      loading="lazy"
                    />
                    <span
                      class="pointer-events-none absolute inset-0 bg-linear-to-t from-midnight/85 via-transparent to-midnight/10"
                      aria-hidden="true"
                    ></span>
                    <span
                      class="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-2.5 pb-2 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-white/90"
                    >
                      {{ String(i + 1).padStart(2, '0') }}
                      <span class="text-neon" aria-hidden="true">✦</span>
                    </span>
                  </button>
                </div>
              </div>

              <button
                type="button"
                class="cert-arrow cert-arrow--right"
                aria-label="Следующие сертификаты"
                @click="certNext"
              >
                →
              </button>
            </div>

            <div class="flex flex-wrap items-center justify-center gap-2">
              <button
                v-for="(item, i) in certItems"
                :key="item.src"
                type="button"
                class="cert-dot"
                :class="{ 'cert-dot--active': i === certPos }"
                :aria-label="`К сертификату ${i + 1}`"
                @click="certGo(i)"
              ></button>
            </div>
          </article>
        </div>
      </section>
    </main>

    <!-- ===== Footer ===== -->
    <footer class="relative z-10 border-t border-steel/60 bg-abyss/60">
      <div
        class="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10"
      >
        <p class="text-xs text-ice">© 2026 Рахы Рахым — веб-дизайнер и фронтенд-разработчик</p>

        <div class="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-ice">
          <a :href="mailto" class="transition-colors hover:text-neon">goodmir100@gmail.com</a>
          <a
            href="https://t.me/m1r0t"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors hover:text-neon"
            >Telegram ↗</a
          >
        </div>
      </div>
    </footer>

    <!-- Certificate Gallery Modal (teleported to <body>) -->
    <CertificateGallery
      :is-open="certOpen"
      :items="certItems"
      :initial-index="certIndex"
      @close="certOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, type Directive } from 'vue';
import CertificateGallery from './CertificateGallery.vue';
import type { CertificateItem } from '../types';

/** Opens the visitor's mail client with a pre-filled subject and body. */
const mailto = `mailto:goodmir100@gmail.com?subject=${encodeURIComponent(
  'Новый проект — предложение сотрудничества',
)}&body=${encodeURIComponent(
  'Здравствуйте, Рахы!\n\nКратко о задаче:\n\nЖелаемые сроки:\nБюджет:\n\nСпасибо!',
)}`;

/** Words for the diagonal running line (odd items render as outlines). */
const marqueeWords: string[] = [
  'Веб-дизайн',
  'Лендинги',
  'Vue 3',
  'TypeScript',
  'Tailwind CSS',
  'Брендинг',
  'Figma',
  'Фронтенд',
];

interface NavLink {
  label: string;
  href: string;
}

interface Service {
  title: string;
  rub: string;
  kzt: string;
}

interface Project {
  name: string;
  href: string;
  tag: string;
}

interface Social {
  label: string;
  href: string;
  icon: 'telegram' | 'github' | 'whatsapp' | 'mail';
}

type Currency = 'rub' | 'kzt';

const navLinks: NavLink[] = [
  { label: 'Услуги', href: '#services' },
  { label: 'Работы', href: '#works' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Контакты', href: '#contacts' },
];

const stack: string[] = ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Figma'];

const services: Service[] = [
  { title: 'Многостраничные сайты', rub: 'от 20 000 ₽', kzt: 'от 100 000 ₸' },
  { title: 'Лендинги', rub: 'от 10 000 ₽', kzt: 'от 50 000 ₸' },
  { title: 'Дизайн сайта', rub: 'от 5 000 ₽', kzt: 'от 25 000 ₸' },
  { title: 'Брендинг', rub: 'от 3 000 ₽', kzt: 'от 15 000 ₸' },
];

const projects: Project[] = [
  { name: 'DEVSPACEHUB', href: 'https://devspacehub.vercel.app/', tag: 'Онлайн-платформа' },
  { name: 'COMBASKET', href: 'https://combasket.vercel.app/', tag: 'Онлайн-магазин' },
  { name: 'SHISHA DXB', href: 'https://hookahproject.vercel.app/', tag: 'Сайт для бизнеса' },
  {
    name: 'LEARNING SCHOOL',
    href: 'https://learningschool-pehuyoavc-m1r1.vercel.app/',
    tag: 'Образовательный сайт',
  },
  {
    name: 'PORTFOLIO / DESKTOP',
    href: 'https://www.figma.com/proto/ZUuYpYLdgh94JekzdUsRAy/Untitled?node-id=2-2827&viewport=404%2C308%2C0.14&t=PwOXvXXd6u4LiRa0-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    tag: 'Figma-прототип',
  },
  {
    name: 'PORTFOLIO / MOBILE',
    href: 'https://www.figma.com/proto/ZUuYpYLdgh94JekzdUsRAy/Untitled?node-id=2-3021&viewport=404%2C308%2C0.14&t=M5odnVCMYLRO7kzj-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    tag: 'Figma-прототип',
  },
];

const socials: Social[] = [
  { label: 'Telegram', href: 'https://t.me/m1r0t', icon: 'telegram' },
  { label: 'GitHub', href: 'https://github.com/goodmir100', icon: 'github' },
  { label: 'WhatsApp', href: 'https://wa.me/77073001386', icon: 'whatsapp' },
  { label: 'Email', href: 'mailto:goodmir100@gmail.com', icon: 'mail' },
];

const currencies: { id: Currency; label: string }[] = [
  { id: 'rub', label: '₽ RUB' },
  { id: 'kzt', label: '₸ KZT' },
];

const currency = ref<Currency>('rub');

const certOpen = ref(false);
const certIndex = ref(0);

/** Open the gallery on a specific certificate (preview strip in the body). */
function openCert(index: number) {
  certIndex.value = index;
  certOpen.value = true;
}

/** Certificates are shown in a shuffled order — Fisher-Yates, once per load. */
function shuffle<T>(source: readonly T[]): T[] {
  const a = [...source];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const certItems: CertificateItem[] = shuffle([
  { src: '/certificates/cert-01.jpg', type: 'image' },
  { src: '/certificates/cert-02.jpg', type: 'image' },
  { src: '/certificates/cert-03.jpg', type: 'image' },
  { src: '/certificates/cert-04.jpg', type: 'image' },
  { src: '/certificates/cert-05.png', type: 'image' },
  { src: '/certificates/cert-06.jpg', type: 'image' },
  { src: '/certificates/cert-07.jpg', type: 'image' },
]);

/* ---------- Certificate carousel (snap scroll, no duplicates) ---------- */

const certViewport = ref<HTMLElement | null>(null);
const certPos = ref(0);
const certPaused = ref(false);
let certTimer: ReturnType<typeof setInterval> | undefined;

function certGo(index: number, smooth = true) {
  const vp = certViewport.value;
  if (!vp) return;
  const tiles = Array.from(vp.querySelectorAll<HTMLElement>('.cert-tile'));
  const idx = Math.max(0, Math.min(index, tiles.length - 1));
  const tile = tiles[idx];
  if (tile) {
    const left = vp.scrollLeft + tile.getBoundingClientRect().left - vp.getBoundingClientRect().left;
    vp.scrollTo({ left, behavior: smooth ? 'smooth' : 'auto' });
  }
  certPos.value = idx;
}

function certNext() {
  const vp = certViewport.value;
  if (!vp) return;
  const atEnd = vp.scrollLeft + vp.clientWidth >= vp.scrollWidth - 12;
  certGo(atEnd ? 0 : certPos.value + 1);
}

function certPrev() {
  certGo(certPos.value - 1);
}

function onCertScroll() {
  const vp = certViewport.value;
  if (!vp) return;
  let best = 0;
  let bestDist = Number.POSITIVE_INFINITY;
  vp.querySelectorAll<HTMLElement>('.cert-tile').forEach((tile, i) => {
    const dist = Math.abs(vp.scrollLeft + tile.getBoundingClientRect().left - vp.getBoundingClientRect().left);
    if (dist < bestDist) {
      bestDist = dist;
      best = i;
    }
  });
  certPos.value = best;
}

onMounted(() => {
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;
  certTimer = setInterval(() => {
    if (!certPaused.value) certNext();
  }, 3800);
});

/* ---------- Scroll reveal (v-reveal="delay in ms") ---------- */

let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null;
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('revealed');
        observer?.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );
  return observer;
}

const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.style.setProperty('--reveal-delay', `${binding.value ?? 0}ms`);
    const io = getObserver();
    if (!io) {
      el.classList.add('revealed');
      return;
    }
    el.classList.add('reveal');
    io.observe(el);
  },
  unmounted(el) {
    observer?.unobserve(el);
  },
};

onBeforeUnmount(() => {
  if (certTimer !== undefined) clearInterval(certTimer);
  observer?.disconnect();
  observer = null;
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Inter:wght@300;400;500;600;700;800;900&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap");

.font-hand {
  font-family: "Caveat", "Segoe Script", "Brush Script MT", cursive;
}

.font-mono2 {
  font-family: "Space Mono", ui-monospace, monospace;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
  background-color: #05060a;
}

::selection {
  background: #38bdf8;
  color: #020617;
}

/* ---------- Hero name: solid blue with glow ---------- */
.hero-script {
  color: #38bdf8;
  text-shadow: 0 0 36px rgba(56, 189, 248, 0.55), 0 2px 18px rgba(37, 99, 235, 0.45);
}

/* ===== Scroll reveal ===== */
.reveal {
  opacity: 0;
  transform: translateY(26px);
  transition:
    opacity 0.7s ease,
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--reveal-delay, 0ms);
}
.reveal.revealed {
  opacity: 1;
  transform: none;
}
.bento-card.reveal {
  transition:
    opacity 0.7s ease,
    transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}
.bento-card.reveal.revealed:hover {
  transform: translateY(-4px);
}

/* ===== Bento cards ===== */
.bento-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(56, 189, 248, 0.14);
  background: linear-gradient(160deg, rgba(15, 23, 42, 0.85), rgba(2, 6, 23, 0.92));
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.3s ease,
    box-shadow 0.4s ease;
}
.bento-card:hover {
  transform: translateY(-4px);
  border-color: rgba(56, 189, 248, 0.42);
  box-shadow: 0 18px 50px -20px rgba(56, 189, 248, 0.35);
}

/* ===== Diagonal marquee band ===== */
.diag-band {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-block: 0.75rem 4.5rem;
  border-block: 1px solid rgba(56, 189, 248, 0.35);
  background: linear-gradient(90deg, #0ea5e9, #38bdf8 45%, #0284c7);
  transform: rotate(-2.4deg) scale(1.06);
  box-shadow: 0 10px 60px -30px rgba(56, 189, 248, 0.8);
}
.diag-inner {
  overflow: hidden;
}
.diag-track {
  display: flex;
  width: max-content;
  animation: diag-scroll 34s linear infinite;
}
.diag-band:hover .diag-track {
  animation-play-state: paused;
}
.diag-copy {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 1.5rem;
  padding-right: 1.5rem;
}
.diag-word {
  font-size: clamp(1.1rem, 2.4vw, 1.7rem);
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #020617;
  white-space: nowrap;
}
.diag-word--outline {
  color: transparent;
  -webkit-text-stroke: 1.2px #020617;
}
.diag-sep {
  font-size: 1.15rem;
  line-height: 1;
  color: #020617;
}
@keyframes diag-scroll {
  to {
    transform: translateX(-50%);
  }
}

/* ===== Certificate carousel ===== */
.cert-track {
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.cert-track::-webkit-scrollbar,
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.cert-tile {
  flex-shrink: 0;
  scroll-snap-align: center;
  width: clamp(160px, 20vw, 220px);
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid rgba(56, 189, 248, 0.22);
  background: rgba(2, 6, 23, 0.6);
  cursor: zoom-in;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    opacity 0.3s ease;
}
.cert-tile:hover {
  border-color: rgba(56, 189, 248, 0.7);
  box-shadow: 0 14px 40px -18px rgba(56, 189, 248, 0.45);
}
.cert-tile.is-active {
  border-color: rgba(56, 189, 248, 0.65);
  box-shadow: 0 14px 44px -18px rgba(56, 189, 248, 0.5);
}
.cert-arrow {
  display: grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 9999px;
  border: 1px solid rgba(56, 189, 248, 0.35);
  background: rgba(2, 6, 23, 0.85);
  color: #7dd3fc;
  cursor: pointer;
  transition:
    border-color 0.3s ease,
    color 0.3s ease,
    background-color 0.3s ease;
}
.cert-arrow:hover {
  border-color: rgba(56, 189, 248, 0.8);
  background: rgba(14, 165, 233, 0.18);
  color: #e0f2fe;
}
.cert-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  border: 0;
  background: rgba(125, 211, 252, 0.3);
  cursor: pointer;
  padding: 0;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}
.cert-dot:hover {
  background: rgba(125, 211, 252, 0.6);
}
.cert-dot.is-active {
  background: #38bdf8;
  transform: scale(1.35);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  .diag-track {
    animation: none;
  }
  .cert-track {
    scroll-behavior: auto;
  }
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .bento-card,
  .bento-card:hover {
    transition: none;
    transform: none;
  }
}
</style>
