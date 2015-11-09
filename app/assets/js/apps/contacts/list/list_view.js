ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _) {

  //create item view
  List.Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: '#contact-list-item',
    events: {
      'click': 'alertPhoneNumber'
    },
    alertPhoneNumber: function(e) {
      alert( this.model.escape('phoneNumber') || 'No phone number!'  );
    }
  });

  //create collectionView
  List.Contacts = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-hover',
    template: '#contact-list',
    childView: List.Contact,
    childViewContainer: "tbody"
  });

});
