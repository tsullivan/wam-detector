var SystemJS = require('systemjs');

SystemJS.config({
  packages: {
    src: {
      defaultExtension: 'ts'
    },
    modules: {
      defaultExtension: 'js'
    }
  }
});

SystemJS.import('./modules/app.js').then(function (m) {
  if (m.exit !== 0) {
    throw new Error(`unexpected result: ${JSON.stringify(m)}`);
  }
});
