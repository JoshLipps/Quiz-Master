import questionsTemplate from './questions.html';
import QuestionsService from './questions.service.js';

export default angular.module('app.components.questions', [])
  .component('questions', {
    templateUrl: questionsTemplate,
    controller: questionsController
  })
  .factory('QuestionsService', QuestionsService)
  .name;

function questionsController(QuestionsService, $log){
  'ngInject';

  let vm = this;
  //'Public' functions
  vm.saveQuestion = saveQuestion;
  vm.addQuestion = addQuestion;

  init();

  function init(){
    refreshList();
  }

  function refreshList(){
    QuestionsService.getList().then(
      (response) => (vm.questions = response.data),
      //TODO better error handling
      (error) => ($log.error('Error getting questions list', error))
    );
  }

  function removeQuestion(id){
    QuestionsService.remove(id).then(
      (response) => (_.reject(vm.questions, id)),
      //TODO better error handling
      (error) => ($log.error('Error getting questions list', error))
    );

  }

  function saveQuestion(){
    QuestionsService.save(vm.newQuestion).then(
      function(response){

        // update list with new quesiton from server
        vm.questions.push(response.data);

        //onSuccessful save clear newQuestion
        vm.newQuestion = null;
      },
      //TODO better error handling
      (error) => ($log.error('Error getting saving new question', error))
    );
  }

  function addQuestion(){
    vm.newQuestion = {};
  }

}
