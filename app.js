/// <reference path="jquery.js" />

var Client = function (options) {
    var self = {};

    self.options = options;

    self.Get = function (path, results_callback) {
        $.ajax({
            type: "GET",
            url: self.options.base_path + path
        }).done(function (msg) {
            console.log(msg);
            if (results_callback) {
                results_callback(msg);
            }
        });
    };

    self.Post = function (path, data, results_callback) {
        $.ajax({
            type: "POST",
            url : self.options.base_path + path,
            data : data
        }).done(function (msg) {
            console.log(msg);
            if (results_callback) {
                results_callback(msg);
            }
        });
    };

    self.UserType = function (obj) {
        var type = {};

        type.title = "";
        type.description = "";

        if (obj) {
            type.title = obj.title;
            type.description = obj.description;
        }

        return type;
    }

    self.Save = function () {

    }

    self.GetAll = function (result_callback) {
        $.ajax({
            type: "GET",
            url: self.options.base_path + "users/"
        }).done(function (msg) {
            console.log(msg);
            if (result_callback) {
                result_callback(msg);
            }
        });
    };

    console.log("Client is ready");
    return self;
};





