# OXC Migration Design

## Goal

Replace ESLint + Prettier with OXC's `oxlint` (linter) and `oxfmt` (formatter) in a single PR. Stylelint stays — OXC has no CSS linter.

## Package changes

**Remove:**

- `eslint`
- `@typescript-eslint/parser`
- `@typescript-eslint/eslint-plugin`
- `eslint-config-prettier`
- `eslint-plugin-storybook`
- `@eslint/json`
- `prettier`

**Add:**

- `oxlint`
- `oxfmt`

**Keep:**

- `stylelint`
- `stylelint-config-standard`

**Note:** `@eslint/json` is in `devDependencies` but is not wired into `eslint.config.mjs` — it is removed without replacement.

**Note:** `eslint-plugin-storybook` has no oxlint equivalent — Storybook-specific linting is dropped (accepted trade-off).

## Files deleted

- `eslint.config.mjs`
- `.prettierrc.json`
- `.prettierignore`

## Files created

### `.oxlintrc.json`

Direct translation of the active rules from `eslint.config.mjs`. Rule names change from `@typescript-eslint/foo` → `typescript/foo`. `@typescript-eslint/explicit-function-return-type` is omitted — it was only set to `off` to suppress a `@typescript-eslint/recommended` default that oxlint's typescript recommended set does not include.

```json
{
  "plugins": ["typescript"],
  "rules": {
    "no-console": "off",
    "no-await-in-loop": "warn",
    "no-undef": "off",
    "typescript/no-explicit-any": "warn",
    "typescript/consistent-type-imports": ["error", { "prefer": "type-imports" }],
    "typescript/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ]
  },
  "ignorePatterns": [
    "dist",
    "node_modules",
    "coverage",
    "data",
    "**/storybook-static",
    "packages/@ghs-hazard-pictograms/assets/assets",
    "packages/@ghs-hazard-pictograms/core/src/pictograms.generated.ts",
    "packages/@ghs-hazard-pictograms/react/src/PictogramProps.ts",
    "packages/@ghs-hazard-pictograms/react/src/Ghs*.tsx",
    "packages/@ghs-hazard-pictograms/react/src/Class*.tsx",
    "packages/@ghs-hazard-pictograms/react/src/Division*.tsx",
    "packages/@ghs-hazard-pictograms/react/src/Divisions*.tsx",
    "packages/@ghs-hazard-pictograms/react/src/index.ts",
    "packages/@ghs-hazard-pictograms/css/sprite.css",
    ".storybook",
    "src"
  ]
}
```

### `.oxfmtrc.json`

1:1 match with the current `.prettierrc.json` — all option names and values are identical.

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "endOfLine": "lf"
}
```

### `.oxfmtignore`

Same content as the current `.prettierignore` — same glob format, same paths.

## Script changes (`package.json`)

| Script         | Before               | After             |
| -------------- | -------------------- | ----------------- |
| `lint`         | `eslint .`           | `oxlint .`        |
| `format`       | `prettier --write .` | `oxfmt --write .` |
| `format:check` | `prettier --check .` | `oxfmt --check .` |
| `lint:css`     | `stylelint ...`      | unchanged         |

## CI changes

None. The CI workflow calls `yarn lint` and `yarn format:check` — the tool swap is transparent.

## Husky changes

None. `.husky/pre-commit` already runs `yarn format` then `yarn test`.
