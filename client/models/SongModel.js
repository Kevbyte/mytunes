// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({


  initialize: function(counts){
    if (counts) {
      this.set({counts: 0});
    }
  },


  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  nextUp: function() {
    this.trigger('nextUp', this);
  },

  upCount: function() {
    var counts = this.get('counts');
    this.set({counts:counts+1});
    debugger
  }

});
