//create the Application instance
var ContactManager = new Marionette.Application();

//init layout and regions before the app starts
ContactManager.on( 'before:start', function() {

  var RegionContainer = Marionette.LayoutView.extend({
    el: '#app-container',
    regions: {
      main: '#main-region'
    }
  });
  //insert regions in layout
  ContactManager.regions = new RegionContainer();

} );

ContactManager.on("start", function() {
    console.log( 'Application started ');
    ContactManager.ContactsApp.List.Controller.listContacts();
});
