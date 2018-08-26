/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'jenkins.Application',

    name: 'jenkins',

    requires: [
        // This will automatically load all classes in the jenkins namespace
        // so that application classes do not need to require each other.
        'jenkins.*'
    ],

    // The name of the initial view to create.
    mainView: 'jenkins.view.main.Main'
});
