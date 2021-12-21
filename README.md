## THANKS:
- Shout out to this [gist](https://gist.github.com/sibelius/8ca62bab78ee9644ae5caffb9f1b1ef4) for making life easier. 
- Thanks to https://turborepo.org/ for being rad

# Turborepo Boiler Plate

- Includes Next.js, Remix, Expo, and React Native projects
  - apps 
    - web: Next.js 
    - docs: Next.js
    - blog: Remix
    - rnative: React Native
    - xpo: Expo 
  - libs
    - ui: react lib
    - ui-native: react-native lib

# How to use

## NOTE FOR REACT NATIVE:

In the scripts of `apps/rnative/package.json` you will want to make sure that `dev` is set to run either ios or android depending on your setup. By default it runs ios.

```
apps/rnative/package.json

scripts": {
    "dev": "yarn ios", // yarn ios | yarn android | yarn start
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "clean": "rm -rf .turbo && rm -rf node_modules"
  },
```

- Clone: `git clone https://github.com/Enricopv/turbo-boilerplate.git {name}`
- Install: `yarn`
- Run: `yarn dev`


