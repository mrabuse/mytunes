// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var songList = this;

    $.ajax ({
      url: 'http://parse.atx.hackreactor.com/mytunes/classes/songs',
      method: 'GET',
      success: function (data) {
        songList.set(data.results);
      }
    });

  }



});