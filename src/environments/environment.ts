// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC0aVme0zfw8WrlnmaqFfepuLCX3pUyZnU',
    authDomain: 'gamelist-33cd9.firebaseapp.com',
    databaseURL: 'https://gamelist-33cd9.firebaseio.com',
    projectId: 'gamelist',
    storageBucket: 'gamelist.appspot.com',
    messagingSenderId: '435306776401'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
