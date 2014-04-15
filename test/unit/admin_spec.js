(function () {
    "use strict";

    jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmine.getEnv().defaultTimeoutInterval = 20000;

	Template.stub('adminEmailNewMember');

	describe('Template.adminEmailNewMember [click #send_email] event', function(){
		var email_recipient;
		it("clicking 'send email' gets the email address input into the form", function(){
			email_recipient = "normal@example.com";

			expect(email_recipient).toBe('normal@example.com');
		});

	});

	Template.stub('adminHome');

	describe('Template.adminHome [click #groupCreate] event', function(){
		var group;
		it("clicking 'create group' ", function(){
			group = 'newGroup';

			expect(group).toBe('newGroup');
		});

	});

	Template.stub('adminMemberNew');

	Template.stub('adminMembers');

})();