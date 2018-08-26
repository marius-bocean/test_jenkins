/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('jenkins.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {

            Ext.Msg.confirm("Confirmation", "Do you want to Save changes?", function(btnText){
                if(btnText === "no"){
                    Ext.Msg.alert("Alert", "You have confirmed 'No'.");
                }
                else if(btnText === "yes"){
                    Ext.Msg.alert("Alert", "You have confirmed 'Yes'.");
                }
            }, this);
            //
        }
    }
});
