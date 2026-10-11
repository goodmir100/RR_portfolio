# Рахы Рахым — Портфолио

Одноэкранная визитка-портфолио. Vue 3 + TypeScript + Tailwind CSS v4 + Vite.

## Скрипты

```bash
npm install        # установить зависимости
npm run dev        # dev-сервер на http://localhost:5173
npm run build      # проверка типов + продакшн-сборка в ./dist
npm run preview    # локальный предпросмотр ./dist
```

## Деплой

Проект статический. `vercel.json` уже включён — запушьте в Git-репозиторий и импортируйте его в
Vercel, либо выполните `npx vercel` из этой папки. Любой статический хостинг (Netlify, GitHub Pages,
Cloudflare Pages) работает с `npm run build` и папкой `dist` в качестве выходной директории.

## Структура

```
index.html                     входной HTML, шрифты, мета-теги
public/favicon.svg             фавикон с мотивом звезды
src/main.ts                    инициализация приложения
src/style.css                  точка входа Tailwind v4 + токены темы + глобальный сброс
src/App.vue                    корневой компонент
src/components/RakhyPortfolio.vue   лендинг (bento-сетка, синяя тема, в <style>)
```

## Редактирование контента

Весь текст, ссылки и проекты находятся в `src/components/RakhyPortfolio.vue`.
Проекты описаны в массиве `projects` внутри `<script setup>`.
