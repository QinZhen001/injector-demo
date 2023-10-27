module.exports = api => {
  api.cache(true);

  return {
    presets: [
      "@babel/preset-env",
      '@babel/preset-typescript'
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: false }],
      ['@babel/plugin-transform-for-of', { assumeArray: true }],
      ['const-enum', { transform: 'removeConst' }],
      '@babel/plugin-transform-runtime'
    ]
  };
};
