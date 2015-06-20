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