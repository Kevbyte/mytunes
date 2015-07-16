// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),


  initialize: function() {
    this.render();

    this.collection.on('add', this.render, this);
  },
    

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );

    // this.$el.detach();


    // return this.$el.html(this.template(this.model.attributes));

    // return this.$el;
  }

});
