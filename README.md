# react-native-starter

## Prerequisites
1. Node
1. Watchman
1. Cocoapods

## Installation
1. Run `git clone git@github.com:Jouddeken/react-native-starter.git .`
1. Run `npm install`
1. Run `cd ios && pod install && cd ..`
1. Run `npm run start`
1. Run `npm run ios` or `npm run android`

## Folder and file structure
- / android
  - / app
      - / src
        - / debug
          - AndroidManifest.xml
        - / main
          - / java / com / reactnativestarter
            - MainActivity.java
            - MainApplication.java
          - / res
            - / mipmap-hdpi
              - ic_launcher_round.png
              - ic_launcher.png
            - / mipmap-mdpi
              - ic_launcher_round.png
              - ic_launcher.png
            - / mipmap-xhdpi
              - ic_launcher_round.png
              - ic_launcher.png
            - / mipmap-xxhdpi
              - ic_launcher_round.png
              - ic_launcher.png
            - / mipmap-xxxhdpi
              - ic_launcher_round.png
              - ic_launcher.png
            - / values
              - strings.xml
              - styles.xml
          - AndroidManifest.xml
      - _BUCK
      - build.defs.bzl
      - build.gradle
      - debug.keystore
      - proguard-rules.pro
  - / gradle / wrapper
    - gradle-wrapper.jar
    - gradle-wrapper.properties
  - build.gradle
  - gradle.properties
  - gradlew
  - gradle.bat
  - settings.gradle
- / ios
  - / Pods
  - / ReactNativeStarter
    - / Base.lproj
      - LaunchScreen.xib
    - / Images.xcassets
      - / AppIcon.appiconset
        - Contents.json
      - Contents.json
    - AppDelegate.h
    - AppDelegate.m
    - Info.plist
    - main.m
  - / ReactNativeStarter.xcodeproj
    - /xcshareddata / xcschemes
      - ReactNativeStarter.xcscheme
    - project.pbxproj
  - / ReactNativeStarter.xcworkspace
    - contents.xsworkspacedata
  - Podfile
  - Podfile.lock
- / node_modules
- .gitignore
- App.js
- app.json
- babel.config.js
- index.js
- metro.config.js
- package-lock.json
- package.json
- README.md
