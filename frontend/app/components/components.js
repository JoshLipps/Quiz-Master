import QuestionsModule from './questions/questions-module.js';
import QuizModule from './quiz/quiz-module.js';
import NavbarModule from './navbar/navbar.js';

export default angular.module('app.components', [
  QuestionsModule,
  QuizModule,
  NavbarModule
]).name;
