/**
 * Module dependencies
 */

/**
 * sails-script
 *
 * Run files and scripts within the sails
 * environment
 * @param  {String} scope
 */
const path = require('path');

module.exports = async function(scope) {
  const appPath = process.cwd();
  var Sails = require(path.resolve(appPath, 'node_modules/sails')).constructor;
  var sailsApp = new Sails();

  return sailsApp.load({
    log: {
      level: 'error'
    }
  }, async (err)  => {
    if (err) {
      console.log('Error occurred loading Sails app:', err);
      return;
    }

    const script = require(path.resolve(appPath, scope));
    const cb = script.length;

    if(cb > 0){
      script(err => {
        process.exit();
      });
    } else {
      let run = await script();
      process.exit();
    }

  });
};
