var afterLogout = null;

Accounts.afterLogout = function(func) {
  if (afterLogout) {
    throw new Error("Can only call afterLogout once");
  } else {
    return afterLogout = func;
  }
};

var oldLogoutMethod = Meteor.server.method_handlers.logout;
delete Meteor.server.method_handlers.logout;

Meteor.methods({
  logout: function() {
    var userId = this.userId;
    oldLogoutMethod.call(this);
    if (afterLogout) {
      afterLogout(userId);
    }
  }
});
