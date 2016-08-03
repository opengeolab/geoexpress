'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Testpkg = new Module('testpkg');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Testpkg.register(function(app, auth, database, circles) {

  //We enable routing. By default the Package Object is passed to the routes
  Testpkg.routes(app, auth, database, circles);

  //We are adding a link to the main menu for all authenticated users
  Testpkg.menus.add({
    title: 'testpkg example page',
    link: 'testpkg example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Testpkg.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Testpkg.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Testpkg.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Testpkg;
});
