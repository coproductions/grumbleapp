Template.chatBlurb.created = function (){
};
Template.chatBlurb.rendered = function (){
};
Template.chatBlurb.destroyed = function (){
};
Template.chatBlurb.helpers({
  isOwner: function () {
    return this.owner === Meteor.userId();
  },
  relativeTime: function () {
    return moment(this.createdAt).fromNow();
  },
  getName: function () {
    if (this.name){
      console.log(this.name);
      return this.name;
    }
  },
  grumpy: function() {
    if (this.counter > 0){
      return true;
    }
  },
  userNameCheck: function() {
    if (this.username){
      return this.username;
    } else {
      return "Anonymous";
    }
  }
});
Template.chatBlurb.events({
  "click .delete": function (event) {
    Meteor.call("deleteChatBlurb", this._id);
  },
  "click .box": function (event){
    if (Meteor.user() !== null){
      Meteor.call("grumbleVote", this._id, Meteor.user()._id);
    }
  }
});