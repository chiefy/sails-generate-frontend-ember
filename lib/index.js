/**
 * sails-generate-frontend-ember
 *
 * Usage:
 * `sails generate frontend`
 *
 * @type {Object}
 */

var cli = require('ember-cli'),
    fs = require('fs'),
    path = require('path');

module.exports = {

    templatesDirectory: path.resolve(__dirname, '../templates'),

    before: require('./before'),

    targets: {

        './ember': {
            exec: function call_ember_cli(scope, cb) {
                var proj_path = scope.rootPath;
                cb.log.info('Creating frontend app with ember-cli for `' + scope.appName  + '`');
                
                try {
                    fs.mkdirSync(proj_path);
                    process.chdir(proj_path);
                } catch (e) {
                    cb.log.error('Could not create/change working directory to init ember app: ' + proj_path);
                    return cb(e);
                }

                cli({
                    cliArgs: ['init', scope.appName],
                    inputStream: process.stdin,
                    outputStream: process.stdout
                }).then(
                    function() {
                        cb.log.info('Done creating frontend for `' + scope.appName + '`');
                        cb();
                    }, function(err) {
                        cb(err);
                    }
                );

            }
        }
    }


};