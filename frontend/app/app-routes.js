export default function appRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';

  // For any unmatched url, redirect to /state1
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');
  //
  // Now set up the states
  $stateProvider
    .state('root', {
      template: '<md-content><navbar></navbar><div ui-view></div></md-content>'
    });

  $stateProvider
    .state('quiz', {
      parent: 'root',
      url: '/',
      template: '<quiz></quiz>'
    });

  $stateProvider
    .state('questions', {
      parent: 'root',
      url: '/questions',
      template: '<questions></questions>'
    });
}
