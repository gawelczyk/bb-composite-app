App.Views.UserView = Backbone.View.extend({

    render: function () {
        this.$el.html("<h3>Name: " + this.model.get('name') + "</h3>"
            + "<p>url: <a href='" + this.model.get('url') + "'>" + this.model.get('url') + "</a> "
            + "Age: " + this.model.get('age')
            + "</p>");
        return this;
    }

});
