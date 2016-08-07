export default function questionsController(QuestionsService, $log, _){
  'ngInject';

  let vm = this;
  //'Public' functions
  vm.updateQuestion = updateQuestion;
  vm.removeQuestion = removeQuestion;
  //newQuestion
  vm.addQuestion = addQuestion;
  vm.cancelQuestion = cancelQuestion;
  vm.saveQuestion = saveQuestion;
  //editQuestion
  vm.edit = edit;
  vm.cancelEdit = cancelEdit;

  //public vars
  vm.editMap = {};

  init();

  function init(){
    refreshList();
  }

  function refreshList(){
    QuestionsService.getList().then(
      (response) => (vm.questions = response.data || []),
      //TODO better error handling
      (error) => ($log.error('Error getting questions list', error))
    );
  }

  function removeQuestion(id){
    QuestionsService.remove(id).then(
      function(response){
        //cleanup list on delete
        vm.questions = _.reject(vm.questions, {id: id});
      },
      //TODO better error handling
      (error) => ($log.error('Error removing question', error))
    );
  }

  function saveQuestion(){
    QuestionsService.save(vm.newQuestion).then(
      function(response){

        // update list with new quesiton from server
        vm.questions.push(response.data);

        //onSuccessful save cancel newQuestion form
        cancelQuestion();
      },
      //TODO better error handling
      (error) => ($log.error('Error saving new question', error))
    );
  }

  function updateQuestion(question){
    QuestionsService.update(question.id, question).then(
      function(response){
        // update list with new question from server
        let index = _.findIndex(vm.questions, {id: question.id});
        vm.questions[index] = response.data;
        cancelEdit(question.id);
      },
      //TODO better error handling
      (error) => ($log.error('Error updating question ' + question.id, error))
    );
  }

  function edit(question){
    vm.editMap[question.id] = angular.copy(question);
  }

  function cancelEdit(id){
    vm.editMap[id] = false;
  }


  function addQuestion(){
    vm.newQuestion = {};
  }

  function cancelQuestion(){
    vm.newQuestion = null;
  }

}
