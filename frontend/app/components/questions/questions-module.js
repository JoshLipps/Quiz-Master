import questionsTemplate from './questions.html';
import questionsController from './questions.js';
import './questions.css';

export default angular.module('app.components.questions', [])
  .component('questions', {
    templateUrl: questionsTemplate,
    controller: questionsController
  })
  .name;
