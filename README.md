accounts-logout-hook
===============================

Provides an Accounts hook for a callback to be invoke after a user has logged out.


Usage
---------------------------

```js
// only on the server
Accounts.afterLogout(function(userId){
  Log.debug('User logged out' + userId);
});
```
