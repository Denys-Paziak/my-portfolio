// eslint.config.mjs - Production-grade ESLint configuration for Next.js 14+ with TypeScript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import unusedImports from "eslint-plugin-unused-imports";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
    // Base Next.js configs (includes react, jsx-a11y, react-hooks, import, etc.)
    ...nextVitals,
    ...nextTs,

    // Prettier integration - must come after other configs to override conflicting rules
    prettierConfig,

    // Custom rules and plugins
    {
        plugins: {
            "unused-imports": unusedImports,
            "simple-import-sort": simpleImportSort,
            prettier: prettier,
        },

        languageOptions: {
            parserOptions: {
                project: "./tsconfig.json",
                tsconfigRootDir: import.meta.dirname,
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },

        settings: {
            react: {
                version: "detect",
            },
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                    project: "./tsconfig.json",
                },
            },
        },

        rules: {
            // ============================================================
            // PRETTIER INTEGRATION
            // ============================================================
            "prettier/prettier": ["error", {}, { usePrettierrc: true }],

            // ============================================================
            // UNUSED IMPORTS & VARIABLES
            // ============================================================
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "off",

            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": [
                "warn",
                {
                    vars: "all",
                    varsIgnorePattern: "^_",
                    args: "after-used",
                    argsIgnorePattern: "^_",
                },
            ],

            // ============================================================
            // IMPORT SORTING & ORGANIZATION
            // ============================================================
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            "import/first": "error",
            "import/newline-after-import": "error",
            "import/no-duplicates": "error",

            // Discourage deep relative imports (prefer absolute @/* aliases)
            "import/no-relative-parent-imports": "off",

            // ============================================================
            // TYPESCRIPT
            // ============================================================
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-non-null-assertion": "warn",
            "@typescript-eslint/ban-ts-comment": [
                "error",
                {
                    "ts-expect-error": "allow-with-description",
                    "ts-ignore": true,
                    "ts-nocheck": true,
                    "ts-check": false,
                },
            ],

            // ============================================================
            // REACT & JSX
            // ============================================================
            "react/react-in-jsx-scope": "off", // Not needed in Next.js 13+
            "react/prop-types": "off", // Using TypeScript
            "react/no-unescaped-entities": "warn",
            "react/self-closing-comp": "warn",

            // Performance & best practices
            "react/jsx-no-constructed-context-values": "error",
            "react/jsx-no-useless-fragment": "warn",
            "react/jsx-no-leaked-render": "warn",
            "react/jsx-curly-brace-presence": [
                "warn",
                {
                    props: "never",
                    children: "never",
                },
            ],

            // ============================================================
            // REACT HOOKS
            // ============================================================
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            // ============================================================
            // GENERAL CODE QUALITY
            // ============================================================
            eqeqeq: ["error", "always", { null: "ignore" }],
            "prefer-const": "error",
            "no-var": "error",
            "no-console": [
                "warn",
                {
                    allow: ["warn", "error"],
                },
            ],

            // Code cleanliness
            "no-multi-spaces": "warn",
            "no-useless-return": "warn",
            "no-useless-concat": "warn",
            "no-duplicate-imports": "error",
            "no-template-curly-in-string": "warn",

            // Avoid common mistakes
            "array-callback-return": "error",
            "no-constructor-return": "error",
            "no-promise-executor-return": "error",
            "no-unreachable-loop": "error",
            "no-self-compare": "error",

            // ============================================================
            // NEXT.JS SPECIFIC
            // ============================================================
            "@next/next/no-html-link-for-pages": "error",
            "@next/next/no-img-element": "warn", // Prefer next/image
        },
    },

    // ============================================================
    // GLOBAL IGNORES
    // ============================================================
    globalIgnores([
        ".next/**",
        "out/**",
        "build/**",
        "dist/**",
        "node_modules/**",
        "coverage/**",
        ".turbo/**",
        "next-env.d.ts",
        "*.config.js",
        "*.config.mjs",
    ]),
]);
