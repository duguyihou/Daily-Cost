module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins:[
    [
      'module-resolver',
      {
        alias: {
          '@pages':'./src/pages',
          '@features':'./src/features'
        }
      }
    ],
  ]
}