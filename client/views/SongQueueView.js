// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
   
  tagName: 'table',

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    var context = this;
    this.$el.html('<th>Song Queue</th>').append(this.collection.map(function (song) {
      return context.renderSong(song);
    }));
  },

  renderSong: function(song) {
    var songView = new SongQueueEntryView({model: song});
    return songView.render();
    // this.$el.html('<th>Song Queue</th>').append(songView.render());
  },
    
});
