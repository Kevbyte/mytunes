// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  // initialize: function() {
  //   this.collection.on('enqueue', this.render, this);

  // },
  setQueue: function(song) {
 
    this.model = song;
    this.render();
  },


  render: function() {
    this.$el.children().detach();

    // this.$el.html('<th>Queue</th>').append(
    //   this.collection.map(function(song){
    //     return new SongQueueEntryView({model: song}).render();
    //   })
    // );

    // this.$el.detach();

    return this.$el;
  }

});
