Meteor.publish("chatBlurbs", function () {
  return ChatBlurbs.find();
});
Meteor.publish("users", function () {
  return Users.find();
});

Meteor.startup(function () {
  // code to run on server at startup
});