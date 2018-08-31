export default function ($stateProvider) {
  $stateProvider
    .state('addProviderUser', {
      url: '/add-user',
      component: 'providerUserComponent',
    })
    .state('otherwise', {
      url: '*path',
      component: 'providerUserListComponent',
    });
}
