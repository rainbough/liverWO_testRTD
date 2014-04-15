(function () {
	"use strict";

    jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmine.getEnv().defaultTimeoutInterval = 20000;

    Template.stub('signIn');

    Template.stub('signUp');

    Template.stub('about');

    Template.stub('error');

    Template.stub('errors');

    Template.stub('header');

})();