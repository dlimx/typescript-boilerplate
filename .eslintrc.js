module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: ['eslint-config-prettier', 'airbnb'],
  rules: {
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: ['airbnb-typescript', 'prettier/@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
