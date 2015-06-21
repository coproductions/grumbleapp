ChatBlurbs = new Mongo.Collection("chatBlurbs");

Meteor.methods({
  addChatBlurb: function (text) {

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
      counter: 0,
      voteRegistry: [0,1]
    });
  },
  deleteChatBlurb: function (chatBlurbId) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    ChatBlurbs.remove(chatBlurbId);
  },
  grumbleVote: function (chatBlurbId,user){
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    console.log(chatBlurbId);
    console.log(user);
    var userIdString = chatBlurbId + user;
    var query = ChatBlurbs.findOne({_id: chatBlurbId});
    var regArray = query.voteRegistry;
    if(regArray.indexOf(userIdString) === -1){
      // regArray.push(userIdString);
      console.log(regArray);
      ChatBlurbs.update(chatBlurbId,{$push: {voteRegistry: userIdString}});
      ChatBlurbs.update(chatBlurbId,{$inc: {counter:1}});
    }
    return true;
  }
});