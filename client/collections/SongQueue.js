// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({
  
  model: SongModel,

  initialize: function() {
    var context = this;

    this.on('ended', function () {
      context.shift();

      if (context.length > 0) {
        context.playFirst();
      }
    });

    this.on('add', function () {
      if (context.length === 1) {
        context.playFirst();
      }
    });

    this.on('dequeue', function () {
      context.remove();
    });
  },

  playFirst: function() {
    this.at(0).play();
  },
});