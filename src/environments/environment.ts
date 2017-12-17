// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB0U5OiTNus9kGC0sGhppwteIirBRj5bog',
    authDomain: 'electric-head.firebaseapp.com',
    databaseURL: 'https://electric-head.firebaseio.com',
    projectId: 'electric-head',
    storageBucket: 'electric-head.appspot.com',
    messagingSenderId: '833889981803'
  }
};
