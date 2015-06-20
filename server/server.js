Meteor.publish("chatBlurbs", function () {
  return ChatBlurbs.find();
});

Meteor.startup(function () {
  // code to run on server at startup
});