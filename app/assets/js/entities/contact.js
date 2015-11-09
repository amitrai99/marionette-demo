ContactManager.module("Entities", function(Entities, ContactManager,Backbone, Marionette, $, _){

    //model
    Entities.Contact = Backbone.Model.extend({});

    //collection
    Entities.ContactCollection = Backbone.Collection.extend({
      model: Entities.Contact,
      comparator: "firstName"
    });

    // model and collection definitions are here
    var contacts;

    var initializeContacts = function() {
      contacts = new Entities.ContactCollection([
        {id:1, firstName: 'Alice', lastName: 'Arten', phoneNumber: "555-0184"},
        {id:2, firstName: 'Bob', lastName: 'Brigham', phoneNumber: "444-0184"},
        {id:3, firstName: 'Charlie', lastName: 'Camp', phoneNumber: "555-9890"},
      ]);
    };

    var API = {
      "getContactEntities": function() {
        if(!contacts) {
          initializeContacts();
        }
        return contacts;
      }
    };

    //set the request handler for a request name
    ContactManager.reqres.setHandler( 'contact:entities', function() {
      return API.getContactEntities();
    } );

});
