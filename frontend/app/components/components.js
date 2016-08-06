import QuestionsModule from './questions/questions.js';
import NavbarModule from './navbar/navbar.js';

export default angular.module('app.components', [
  QuestionsModule,
  NavbarModule
]).name;
