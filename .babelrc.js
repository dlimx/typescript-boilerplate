module.exports = {
  presets: ['@babel/env', '@babel/react'],
  plugins: [['import', { libraryName: 'antd', style: 'css' }]],
};
