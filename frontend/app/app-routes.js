export default function appRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';

  // For any unmatched url, redirect to /state1
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');
  //
  // Now set up the states
  $stateProvider
    .state('root', {
      template: '<md-content><navbar></navbar><div md-whiteframe="1" class="page" ui-view></div></div>'
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
