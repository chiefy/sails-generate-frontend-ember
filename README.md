![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# sails-generate-frontend-ember

A `frontend` generator for use with the Sails command-line interface. This generator uses the `ember-cli` project to create an ember-based frontend for a Sails project.

### Installation

Certain generators are installed by default in Sails, but they can be overridden.  Check the [Sails docs](http://sailsjs.org/#!documentation) for information on installing generator overrides / custom generators.

```sh
$ npm install sails-generate-frontend-ember
```


### Production Usage

##### On the command line

```sh
$ sails generate frontend
```

##### In a node script

```javascript
var path = require('path');
var sailsgen = require('sails-generate');
var scope = {
	rootPath: path.resolve(__dirname)
};
sailsgen(require('sails-generate-frontend'), scope, function (err) {
	if (err) throw err;

	// It worked.
});
```
