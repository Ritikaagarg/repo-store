# repo-store

This is a react native application with the login with github functionality and access to one's github profile and repositories.

## Project system requirements and prerequisites - 
- Node
- Xcode (if using mac)
- Android Studio

## OAuth related configuration to register a GitHub OAuth app
Add .env file in the root folder containing variables named - 
- GITHUB_CLIENT_ID (for client id) 
- GITHUB_CLIENT_SECRET (for client secret) got from github oauth.

## How to locally setup the application
- Clone the project
- cd repo-store
- Run "npm install"
- For android, add local.properties file in root_project/android
- For ios, run "cd ios && pod install"
- Run "npm start" and "npx react-native run-android" or "npx react-native run-ios" depending on the platform you are using.
For more reference, check - https://reactnative.dev/docs/environment-setup

## Primary tools and technologies used (with all latest versions) and their purpose
- [React Navigation] - used to add navigation 
- [Redux] - used for the global state management
- [Moment] - used for formatting time strings
- [React-native-config] - used to access environment variables
- [React-native-webview] - used to load webpage

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job.)

[React Navigation]: <https://reactnavigation.org/docs/getting-started/>
[Redux]: <https://redux.js.org/>
[Moment]: <https://www.npmjs.com/package/moment>
[React-native-config]: <https://www.npmjs.com/package/react-native-config>
[React-native-webview]: <https://www.npmjs.com/package/react-native-webview>
