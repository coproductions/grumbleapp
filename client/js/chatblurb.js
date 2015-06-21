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
  facebookName: function () {
    if (this.name){
      console.log(this.name);
      return this.name;
    }
  }
});
Template.chatBlurb.events({
  "click .delete": function () {
    Meteor.call("deleteChatBlurb", this._id);
  }
});