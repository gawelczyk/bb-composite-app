App.init = function () {
    // create user instance with params: {name: "Batman", age: 55, id: 99, url: "http://rocketmind.pl"}

    var bob = new App.Models.User({name: "Batman", age: 55, id: 99, url: "http://rocketmind.pl"});

    // create view instance
    var userView = new App.Views.UserView({
        model: bob
    });

    // render view
    userView.render();

    // print rendered view HTML to $(".js-app")
    $('.js-app').append(userView.$el);

};

$(function () {
    App.init();
});
