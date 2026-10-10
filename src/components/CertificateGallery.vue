<template>
  <Teleport to="body">
    <Transition name="cert-fade">
      <div
        v-if="isOpen"
        class="cert-root fixed inset-0 z-50 flex items-center justify-center"
        role="dialog"
        aria-modal="true"
        aria-label="Галерея сертификатов"
      >
        <!-- Backdrop -->
        <div
          class="cert-backdrop absolute inset-0"
          @click="close"
          aria-hidden="true"
        ></div>

        <!-- Panel -->
        <div
          ref="panel"
          class="cert-panel relative flex flex-col"
          tabindex="-1"
        >
          <!-- Header -->
          <div class="cert-head flex items-center justify-between shrink-0">
            <div class="flex items-center u-gap-12">
              <span class="text-brand-blue u-label" aria-hidden="true">✦</span>
              <h2 class="font-sans text-white uppercase tracking-widest u-title u-w-500">
                Сертификаты
              </h2>
              <span class="font-mono text-slate-500 u-count" aria-hidden="true">
                {{ String(active + 1).padStart(2, '0') }} / {{ String(items.length).padStart(2, '0') }}
              </span>
            </div>

            <button
              type="button"
              class="cert-close flex items-center justify-center transition-colors"
              aria-label="Закрыть галерею"
              @click="close"
            >
              <svg viewBox="0 0 12 12" class="u-close-icon" aria-hidden="true">
                <path
                  d="M1 1 11 11 M11 1 1 11"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.2"
                />
              </svg>
            </button>
          </div>

          <!-- Stage: image for scans, embedded viewer for PDF -->
          <div class="cert-body relative flex-1 min-h-0 flex items-center justify-center">
            <img
              v-if="current.type === 'image'"
              :src="current.src"
              :alt="`Сертификат ${active + 1}`"
              class="cert-media w-full h-full object-contain"
            />
            <object
              v-else
              :data="current.src"
              type="application/pdf"
              class="cert-media w-full h-full bg-white"
            >
              <p class="font-sans text-slate-400 u-hint">
                Браузер не может встроить PDF —
                <a :href="current.src" target="_blank" rel="noopener noreferrer" class="text-brand-blue"
                  >откройте сертификат в новой вкладке</a
                >.
              </p>
            </object>
          </div>

          <!-- Footer: navigation + direct link -->
          <div class="cert-foot flex items-center justify-between shrink-0">
            <div class="flex items-center u-gap-8">
              <button
                v-for="(item, i) in items"
                :key="item.src"
                type="button"
                class="cert-dot transition-colors"
                :class="i === active ? 'bg-brand-blue' : 'bg-slate-700 hover:bg-slate-500'"
                :aria-label="`Перейти к сертификату ${i + 1}`"
                :aria-current="i === active ? 'true' : undefined"
                @click="active = i"
              ></button>
            </div>

            <div class="flex items-center u-gap-16">
              <a
                :href="current.src"
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono uppercase tracking-widest text-slate-400 hover:text-white transition-colors u-label"
                >{{ current.type === 'image' ? 'Открыть изображение' : 'Открыть PDF' }}</a
              >
              <div class="flex items-center u-gap-8">
                <button
                  type="button"
                  class="cert-nav flex items-center justify-center transition-colors"
                  aria-label="Предыдущий сертификат"
                  @click="go(-1)"
                >
                  ←
                </button>
                <button
                  type="button"
                  class="cert-nav flex items-center justify-center transition-colors"
                  aria-label="Следующий сертификат"
                  @click="go(1)"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import type { CertificateItem } from '../types';


const props = defineProps<{
  isOpen: boolean;
  items: CertificateItem[];
}>();

const emit = defineEmits<{ close: [] }>();

const panel = ref<HTMLElement | null>(null);
const active = ref(0);

const current = computed(() => props.items[active.value] ?? props.items[0]);

function clamp(n: number) {
  const len = props.items.length || 1;
  return ((n % len) + len) % len;
}

function go(step: number) {
  active.value = clamp(active.value + step);
}

function close() {
  emit('close');
}

function onKeydown(e: KeyboardEvent) {
  if (!props.isOpen) return;
  switch (e.key) {
    case 'Escape':
      e.preventDefault();
      close();
      break;
    case 'ArrowRight':
      e.preventDefault();
      go(1);
      break;
    case 'ArrowLeft':
      e.preventDefault();
      go(-1);
      break;
    case 'Tab':
      trapFocus(e);
      break;
  }
}

/** Keep keyboard focus inside the dialog while it is open. */
function trapFocus(e: KeyboardEvent) {
  const root = panel.value;
  if (!root) return;
  const focusable = root.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
  );
  if (focusable.length === 0) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const inside = root.contains(document.activeElement);

  if (e.shiftKey && (document.activeElement === first || !inside)) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

let opener: HTMLElement | null = null;

watch(
  () => props.isOpen,
  async (open) => {
    if (open) {
      opener = document.activeElement as HTMLElement | null;
      active.value = clamp(active.value);
      await nextTick();
      panel.value?.focus();
      document.addEventListener('keydown', onKeydown);
    } else {
      document.removeEventListener('keydown', onKeydown);
      opener?.focus?.();
      opener = null;
    }
  },
);

onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown));
</script>

<style scoped>
/*
 * The dialog is teleported to <body>, so it sits outside `.stage` and would
 * inherit no scale variable. Redefine `--u` here to keep it in step with the
 * 1280 x 640 reference canvas used by the page.
 */
.cert-root {
  --u: min(calc(100vw / 1280), calc(100vh / 640));
  --u: min(calc(100vw / 1280), calc(100svh / 640));
  --frame-w: calc(1280 * var(--u));
  --frame-h: calc(640 * var(--u));

  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}

.cert-backdrop {
  background-color: rgba(4, 7, 18, 0.88);
  backdrop-filter: blur(calc(6 * var(--u)));
}

.cert-panel {
  width: calc(var(--frame-w) * 0.86);
  height: calc(var(--frame-h) * 0.86);
  max-width: 92vw;
  max-height: 92vh;
  background-color: #0a0f20;
  border: 1px solid rgba(30, 41, 59, 1);
  border-radius: calc(6 * var(--u));
  box-shadow: 0 calc(30 * var(--u)) calc(80 * var(--u)) rgba(0, 0, 0, 0.6);
  outline: none;
}

.cert-head {
  padding: calc(14 * var(--u)) calc(20 * var(--u));
  border-bottom: 1px solid rgba(30, 41, 59, 1);
}

.cert-body {
  padding: calc(16 * var(--u)) calc(20 * var(--u));
}

.cert-media {
  border-radius: calc(4 * var(--u));
}

.cert-body .cert-media[src$='.jpg'],
.cert-body img {
  object-fit: contain;
}

.cert-body object {
  border: 1px solid rgba(30, 41, 59, 1);
  border-radius: calc(4 * var(--u));
}

.cert-hint {
  font-size: calc(13 * var(--u));
  padding: calc(20 * var(--u));
  text-align: center;
}

.cert-foot {
  padding: calc(12 * var(--u)) calc(20 * var(--u));
  border-top: 1px solid rgba(30, 41, 59, 1);
}

/* ---------- Typography ---------- */
.u-title {
  font-size: calc(13 * var(--u));
}
.u-count {
  font-size: calc(11 * var(--u));
  letter-spacing: 0.12em;
}
.u-label {
  font-size: calc(11 * var(--u));
  font-weight: 280;
}

/* ---------- Controls ---------- */
.cert-close {
  width: calc(28 * var(--u));
  height: calc(28 * var(--u));
  border: 1px solid rgba(51, 65, 85, 1);
  border-radius: calc(4 * var(--u));
  color: rgb(148, 163, 184);
}
.cert-close:hover {
  color: #fff;
  border-color: var(--accent-blue, #2563eb);
  background-color: rgba(37, 99, 235, 0.15);
}
.u-close-icon {
  width: calc(11 * var(--u));
  height: calc(11 * var(--u));
}

.cert-nav {
  width: calc(28 * var(--u));
  height: calc(28 * var(--u));
  border: 1px solid rgba(51, 65, 85, 1);
  border-radius: calc(4 * var(--u));
  font-size: calc(13 * var(--u));
  color: rgb(203, 213, 225);
}
.cert-nav:hover {
  color: #fff;
  border-color: #2563eb;
  background-color: rgba(37, 99, 235, 0.15);
}

.cert-dot {
  width: calc(18 * var(--u));
  height: calc(3 * var(--u));
  border-radius: calc(2 * var(--u));
}

/* ---------- Spacing helpers ---------- */
.u-gap-8 {
  column-gap: calc(8 * var(--u));
}
.u-gap-12 {
  column-gap: calc(12 * var(--u));
}
.u-gap-16 {
  column-gap: calc(16 * var(--u));
}
.u-w-500 {
  font-weight: 500;
}

/* ---------- Transitions ---------- */
.cert-fade-enter-active,
.cert-fade-leave-active {
  transition: opacity 180ms ease;
}
.cert-fade-enter-from,
.cert-fade-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .cert-fade-enter-active,
  .cert-fade-leave-active {
    transition: none;
  }
}
</style>
