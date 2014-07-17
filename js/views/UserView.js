App.Views.UserView = Backbone.View.extend({

    initialize: function (params) {
        this.model.on("change", this.render, this);
        this.model.on("destroy", this.destroy, this);
    },

    render: function () {
        this.$el.html("<h3>Name: " + this.model.get('name') + "</h3>"
            + "<div>url: <a href='" + this.model.get('url') + "'>" + this.model.get('url') + "</a> "
            + "Age: " + this.model.get('age') + "</div>"
            + "<div><input type='text'/><button class='js-button'>click me</button></div>");
        return this;
    },

    destroy: function () {
        console.log('destroy called');
    },

    events: {
        "click .js-button": "onclickButton"
    },

    onclickButton: function () {
        var newName = this.$el.find('input').val();
        console.log(newName);
        if (newName)
            this.model.set('name', newName);
    }

});
