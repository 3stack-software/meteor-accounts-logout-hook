Package.describe({
  name: '3stack:accounts-logout-hook',
  version: '0.0.1',
  summary: 'Provides Accounts.afterLogout(func)',
  git: 'https://github.com/3stack-software/meteor-accounts-logout-hook',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.2');

  api.use('accounts-base', 'server');

  api.addFiles('after-logout.js', 'server');
});
