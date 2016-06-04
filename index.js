/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-metismenu',

  included: function(app, parentAddon) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/metisMenu/dist/metisMenu.js');
    app.import(app.bowerDirectory + '/metisMenu/dist/metisMenu.css');
  }

};
