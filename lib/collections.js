ChatBlurbs = new Mongo.Collection("chatBlurbs");

Meteor.methods({
  addChatBlurb: function (text) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    // var usernameAssign;
    // if (Meteor.user().profile.name){
    //   usernameAssign = Meteor.user().profile.name;
    // } else {
    //   usernameAssign = Meteor.user().username;
    // }

    ChatBlurbs.insert({
      text: text,
      createdAt: moment(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
      counter: 0
    });
  },
  deleteChatBlurb: function (chatBlurbId) {
    ChatBlurbs.remove(chatBlurbId);
  },
  grumbleVote: function (chatBlurbId,user){
    var userIdString = chatBlurbId + user;
    if (ChatBlurbs.findOne({userIdString: userIdString})){
      return false;
    }
    ChatBlurbs.insert({userIdString: userIdString});
     return ChatBlurbs.update(chatBlurbId,{$inc: {counter:1}});
  }
});