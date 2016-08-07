import navbarTemplate from './navbar.html';

export default angular.module('app.components.navbar', [])
  .component('navbar', {
    templateUrl: navbarTemplate,
    controller: controller
    // bindings: { navbar: '=' }
  })
  .name;

function controller($state){
  'ngInject';
  let vm = this;

  vm.$state = $state;

}
