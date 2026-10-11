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

Проект подключён к Vercel через **Git-интеграцию**: репозиторий
[`goodmir100/RR_portfolio`](https://github.com/goodmir100/RR_portfolio), прод-ветка `main`.

**Достаточно запушить в `main` — Vercel соберёт и опубликует сам**, заходить в терминал не нужно.
Обычно занимает меньше минуты; сборка останавливается на этапе ошибок типов/билда.

```bash
git push          # → автодеплой на rakhy-rakhym-portfolio.vercel.app
```

- `vercel.json` задаёт пресет `vite` и ЧПУ-адреса (без `.html`).
- Ветки, отличные от `main`, получают превью-ссылки вместо прода.
- Локально то же самое: `npm run build` → статика в `./dist`, пригодная для Netlify,
  GitHub Pages или Cloudflare Pages.

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
