import QuestionsService from './questions.js';
import QuizService from './quiz.js';

export default angular.module('app.services')
  .factory('QuestionsService', QuestionsService)
  .factory('QuizService', QuizService)
  .name;
