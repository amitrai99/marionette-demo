ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _) {
  List.Controller = {
    listContacts: function() {
      var contacts = ContactManager.request('contact:entities');

      //create collection view
      var contactsListView = new List.Contacts({
        collection: contacts
      });

      //attach it to app regions
      ContactManager.regions.main.show(contactsListView);
    }
  };
});
