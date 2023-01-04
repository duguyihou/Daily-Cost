module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@screens': './src/screens',
          '@features': './src/features',
          '@components': './src/components',
          '@shared': './src/shared',
          '@utils': './src/utils',
          '@routes': './src/routes',
        },
      },
    ],
  ],
}
