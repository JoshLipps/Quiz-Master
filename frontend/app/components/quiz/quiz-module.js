import quizTemplate from './quiz.html';
import quizController from './quiz.js';
import './quiz.css';

export default angular.module('app.components.quiz', [])
  .component('quiz', {
    templateUrl: quizTemplate,
    controller: quizController
  })
  .name;
