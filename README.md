# next-template

[Next.js](https://github.com/vercel/next.js) framework starter repository 🐢

## Tech Stack

| Environments                 | Languages                  | Linters                                                                     | Frameworks   | Libraries                                                                      | Testing                             | CI/CD                 |
| :--------------------------- | :------------------------- | :-------------------------------------------------------------------------- | :----------- | :----------------------------------------------------------------------------- | :---------------------------------- | :-------------------- |
| ![node-logo]<br>![pnpm-logo] | ![ts-logo]<br>![sass-logo] | ![eslint-logo]<br>![stylelint-logo]<br>![prettier-logo]<br>![lefthook-logo] | ![next-logo] | ![react-logo]<br>![tailwind-logo]<br>![swr-logo]<br>![zod-logo]<br>![rhf-logo] | ![vitest-logo]<br>![storybook-logo] | ![githubactions-logo] |

[node-logo]: https://img.shields.io/badge/-Node.js-5FA04E.svg?logo=nodedotjs&style=flat&logoColor=ffffff
[pnpm-logo]: https://img.shields.io/badge/-pnpm-F69220.svg?logo=pnpm&style=flat&logoColor=ffffff
[ts-logo]: https://img.shields.io/badge/-TypeScript-3178C6.svg?logo=typescript&style=flat&logoColor=ffffff
[sass-logo]: https://img.shields.io/badge/-Sass-CC6699.svg?logo=sass&style=flat&logoColor=ffffff
[eslint-logo]: https://img.shields.io/badge/-ESLint-4B32C3.svg?logo=eslint&style=flat&logoColor=ffffff
[stylelint-logo]: https://img.shields.io/badge/-Stylelint-263238.svg?logo=stylelint&style=flat&logoColor=ffffff
[prettier-logo]: https://img.shields.io/badge/-Prettier-F7B93E.svg?logo=prettier&style=flat&logoColor=000000
[lefthook-logo]: https://img.shields.io/badge/-Lefthook-FF1E1E.svg?logo=lefthook&style=flat&logoColor=ffffff
[next-logo]: https://img.shields.io/badge/-Next.js-000000.svg?logo=nextdotjs&style=flat&logoColor=ffffff
[react-logo]: https://img.shields.io/badge/-React-61DAFB.svg?logo=react&style=flat&logoColor=000000
[tailwind-logo]: https://img.shields.io/badge/-Tailwind%20CSS-06B6D4.svg?logo=tailwindcss&style=flat&logoColor=ffffff
[swr-logo]: https://img.shields.io/badge/-SWR-000000.svg?logo=swr&style=flat&logoColor=ffffff
[zod-logo]: https://img.shields.io/badge/-Zod-3E67B1.svg?logo=zod&style=flat&logoColor=ffffff
[rhf-logo]: https://img.shields.io/badge/-React%20Hook%20Form-EC5990.svg?logo=reacthookform&style=flat&logoColor=ffffff
[vitest-logo]: https://img.shields.io/badge/-Vitest-6E9F18.svg?logo=vitest&style=flat&logoColor=ffffff
[storybook-logo]: https://img.shields.io/badge/-Storybook-FF4785.svg?logo=storybook&style=flat&logoColor=ffffff
[githubactions-logo]: https://img.shields.io/badge/-GitHub%20Actions-2088FF.svg?logo=githubactions&style=flat&logoColor=ffffff

### Other

- [next-themes](https://github.com/pacocoursey/next-themes)
- [framer-motion](https://www.framer.com/motion)
- [tailwind-variants](https://www.tailwind-variants.org)
- [clsx & tailwind-merge](./src/utils/cn.ts)

## Development

1. [Required](#required)
2. [Environment Variables](#environment-variables)
3. [Commands](#commands)

### Required

```ini
node = ">=22"
pnpm = ">=10"
```

> [!TIP]
>
> See [`.prototools`](./.prototools) for more details.

### Environment Variables

```ini

```

> [!TIP]
>
> See [`.env.example`](./.env.example) for more details.

### Commands

#### Installing Packages

```sh
pnpm i
```

> [!IMPORTANT]
>
> After the initial installation (if the format-on-save feature is not working), restart VS Code (IDE).

> [!NOTE]
>
> In the future, I want to migrate the Linter and Formatter from ESLint and Prettier configurations to [Biome](https://biomejs.dev). However, I need to check compatibility by comparing the configuration options.

#### Start Development Server

```sh
pnpm dev
```

#### Linting

```sh
pnpm lint
```

#### Formatting Code

```sh
pnpm format
```

#### Runs linter and formatter

```sh
pnpm check
```

> [!NOTE]
>
> Commands related to `lint`, `format`, and `check` perform similar operations to [Biome](https://biomejs.dev/reference/cli/#biome-check).

#### Running Storybook (UI component tests)

```sh
pnpm sb
```

#### Running Tests

```sh
pnpm test
```

> [!TIP]
>
> See [scripts in `package.json`](./package.json) for more details.
