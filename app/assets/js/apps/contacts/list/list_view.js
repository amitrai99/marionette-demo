ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _) {

  //create item view
  List.Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: '#contact-list-item',
    events: {
      'click': 'highlightName',
      'click td': 'showContent',
      'click .btn.js-delete': 'deleteClicked'
    },
    alertPhoneNumber: function(e) {
      alert( this.model.escape('phoneNumber') || 'No phone number!'  );
    },
    highlightName: function(e) {
      this.$el.toggleClass('warning');
      this.trigger('contact:highlight', this.model );
    },
    showContent: function(e) {
      var content = $(e.target).text();
      alert(content);
    },
    deleteClicked: function(e) {
      e.stopPropagation();
      this.trigger('contact:delete', this.model);
      //this.model.collection.remove(this.model);
    },
    remove: function() {
      var self = this;
      this.$el.fadeOut( function() {
        Marionette.ItemView.prototype.remove.call(self);
      } );
    }
  });

  //create collectionView
  List.Contacts = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-hover',
    template: '#contact-list',
    childView: List.Contact,
    childViewContainer: "tbody",
    onChildviewContactDelete: function(a,b) {
      console.log(a);
      console.log(b);
      this.$el.fadeOut(1000, function() {
        $(this).fadeIn(1000);
      });
    }
  });

});
