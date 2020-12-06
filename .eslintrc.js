const defaultPlugins = ['prettier'];

const defaultExtends = ['prettier'];

const defaultRules = {
  'prettier/prettier': 'error',
  'import/prefer-default-export': 'off',
  'import/no-default-export': 'error',
};

module.exports = {
  root: true,
  plugins: [...defaultPlugins],
  extends: [...defaultExtends, 'eslint-config-prettier', 'airbnb'],
  rules: {
    ...defaultRules,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: [...defaultPlugins, '@typescript-eslint'],
      extends: [
        ...defaultExtends,
        'airbnb-typescript',
        'prettier/@typescript-eslint',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        ...defaultRules,
      },
    },
  ],
};
