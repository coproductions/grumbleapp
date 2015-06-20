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
