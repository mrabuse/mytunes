// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  template: _.template('<td>(<%- artist %>)</td><td><%- title %></td>'),

  initialize: function() {
    this.model.on('add', this.render, this);
    this.model.on('remove', this.render, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }

});
