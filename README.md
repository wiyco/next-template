# next-template

This project was created by `npx create-next-app@latest` command.

[Next.js](https://github.com/vercel/next.js) framework starter repository.

## Docs

- [Next.js](https://nextjs.org/docs)

## Development

First, you must install packages.

```bash
npm i
```

## Packages

1. [clsx & tailwind-merge](#1-clsx--tailwind-merge)
2. [next-themes](#2-next-themes)
3. [framer-motion](#3-framer-motion)
4. [swr](#4-swr)
5. [react-hook-form](#5-react-hook-form)
6. [zod](#6-zod)
7. [vitest](#7-vitest)
8. [storybook](#8-storybook)

### 1. clsx & tailwind-merge

By using these two packages, you can concatenate class names and prevent duplication in Tailwind.

> [!NOTE]
>
> The script is located in `src/utils/cn.ts`.

### 2. [next-themes](https://github.com/pacocoursey/next-themes)

For applying color themes.

This package supports light mode and dark mode by default.

### 3. [framer-motion](https://www.framer.com/motion)

Animations.

### 4. [swr](https://swr.vercel.app)

Useful libraries for client-side (means: `use client`) fetching.

### 5. [react-hook-form](https://react-hook-form.com/docs)

It's foolish to handle form control without using this library.

> [!IMPORTANT]
>
> [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers) required to use [Zod](#7-zod) for form validation. (already included in the package)

### 6. [zod](https://zod.dev)

The use cases are endless, from server-side type validation to client-side form validation.

### 7. [vitest](https://vitest.dev/guide)

This package is used for testing (such as unit tests).

> [!IMPORTANT]
>
> To perform UI testing, you need to configure the [@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom) package and set up [Vitest config](https://vitest.dev/config/#globals).

### 8. [storybook](https://storybook.js.org/docs/get-started)

Use for visual testing of UI.

Useful for automatic docs generation of components, testing of theme colors, and testing with various viewports.

---

🐢
