Meteor.subscribe("chatBlurbs");

Template.body.created = function (){
};
Template.body.rendered = function (){
};
Template.body.destroyed = function (){
};
Template.body.helpers({
  chatBlurbs: function () {
    return ChatBlurbs.find({}, {sort: {createdAt: -1}});
  }
});

Template.body.events({
  "submit .new-chatBlurb": function (event) {

    var text = event.target.text.value;

    Meteor.call("addChatBlurb", text);
    event.target.text.value = "";

    return false;
  }
});

Template.chatBlurb.created = function (){
};
Template.chatBlurb.rendered = function (){
};
Template.chatBlurb.destroyed = function (){
};
Template.chatBlurb.helpers({
  isOwner: function () {
    return this.owner === Meteor.userId();
  }
});
Template.chatBlurb.events({
  "click .delete": function () {
    Meteor.call("deleteChatBlurb", this._id);
  }
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});