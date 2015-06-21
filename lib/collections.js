ChatBlurbs = new Mongo.Collection("chatBlurbs");

Meteor.methods({
  addChatBlurb: function (text) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    ChatBlurbs.insert({
      text: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().name || Meteor.user().username

    });
  },
  deleteChatBlurb: function (chatBlurbId) {
    ChatBlurbs.remove(chatBlurbId);
  }
});