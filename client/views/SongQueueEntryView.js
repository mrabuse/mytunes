// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%- artist %>)</td><td><%- title %></td>'),
  
  events: {
    'click': function () {
      this.model.dequeue();
    }
  },

  initialize: function() {
    this.model.on('add', this.render, this);
    this.on('click', function () {
      console.log('hey');
    } );
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
