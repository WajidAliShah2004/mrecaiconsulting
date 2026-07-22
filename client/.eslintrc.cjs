module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
  overrides: [
    {
      // Next.js App Router files legitimately export metadata/generateStaticParams
      // alongside the page component; react-refresh is a Vite-only concern.
      files: ['app/**/*'],
      rules: { 'react-refresh/only-export-components': 'off' },
    },
  ],
}
