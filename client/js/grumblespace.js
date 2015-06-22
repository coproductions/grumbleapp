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
    var pic = null;

    Meteor.call("addChatBlurb", text, pic);
    event.target.text.value = "";

    return false;
  },
  "click .pugicon": function (event) {
    var text = "Check this out!";
    var pic = MeteorCamera.getPicture({
      width: 100,
      height: 100,
      quality: 90
    }, function (text, pic){
      Meteor.call("addChatBlurb", text, pic);
    });
  }
});
