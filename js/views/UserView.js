App.Views.UserView = Backbone.View.extend({

    initialize: function (params) {
        this.model.on("change", this.render, this);
        this.model.on("destroy", this.destroy, this);
    },

    template: Handlebars.compile('<h3>Name: {{name}}</h3><div>Age: {{age}} <a href="{{url}}">{{url}}</a></div><div><input type="text"/><button class="js-button">click me</button> <button class="js-destroy">destroy</button> </div>'),

    render: function () {
        var json = this.model.toJSON();
        var html = this.template(json);
        this.$el.html(html);

//        this.$el.html("<h3>Name: " + this.model.get('name') + "</h3>"
//            + "<div>url: <a href='" + this.model.get('url') + "'>" + this.model.get('url') + "</a> "
//            + "Age: " + this.model.get('age') + "</div>"
//            + "<div><input type='text'/><button class='js-button'>click me</button> <button class='js-destroy'>destroy</button></div>");

        return this;
    },

    onDestroy: function () {
        console.log('destroy called');
    },

    events: {
        "click .js-button": "onclickButton",
        "click .js-destroy": "onDestroy"
    },

    onclickButton: function () {
        var newName = this.$el.find('input').val();
        console.log(newName);
        if (newName)
            this.model.set('name', newName);
    }

});
