module.exports = {
  presets: ['module:@react-native/babel-preset'],
  //plugins: ['react-native-reanimated/plugin'],

  env: {
    production: {
      plugins: ['react-native-paper/babel'],
      plugins: [ "react-native-reanimated/plugin"],
    },
  },
  plugins: ['react-native-reanimated/plugin'],
};
