(function() {
    var build = angular.module('builder', []);

    build.controller('BuilderController', function() {
        this.builderOptions = buildOptions;
        this.sections = Object.keys(this.builderOptions);
        for (section in this.sections) {
            var savedValue = getQueryString(this.sections[section]);
            var isSavedValueARealOption = $.inArray(savedValue, this.builderOptions[this.sections[section]].options) !== -1;
            this[this.sections[section]] = isSavedValueARealOption ? savedValue : this.builderOptions[this.sections[section]].options[0];
        }

        this.setOption = function(key, value) {
            this[key] = value;
        }

        this.createLink = function() {
            fbURI = "https://www.facebook.com/sharer/sharer.php?u=";
            currentURI = window.location;
            return fbURI + encodeURIComponent(currentURI + this.buildQuery());
        }

        this.buildQuery = function() {
            buildQuery = "?";
            for (var section in this.sections) {
                buildQuery += (option+"="+this[this.sections[section]].name+"&");
            }
            return buildQuery;
        }

    });

    buildOptions = {
        Option1 : {
            description: "description",
            options: [
                {name: "Choice 1",description: "lorem ipsum"},
                {name: "Choice 2",description: "lorem ipsum"},
                {name: "Choice 3",description: "lorem ipsum"},
                {name: "Choice 4",description: "lorem ipsum"},
            ]
        },
        Option2 : {
            description: "description",
            options: [
                {name: "Choice 1",description: "lorem ipsum"},
                {name: "Choice 2",description: "lorem ipsum"},
                {name: "Choice 3",description: "lorem ipsum"},
                {name: "Choice 4",description: "lorem ipsum"},
            ]
        },
        Option3 : {
            description: "description",
            options: [
                {name: "Choice 1",description: "lorem ipsum"},
                {name: "Choice 2",description: "lorem ipsum"},
                {name: "Choice 3",description: "lorem ipsum"},
                {name: "Choice 4",description: "lorem ipsum"},
            ]
        },
    }

    var getQueryString = function ( field ) {
        var href = window.location.href;
        var regex = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
        var query = regex.exec(href);
        return query ? query[1] : null;
    };

})();
