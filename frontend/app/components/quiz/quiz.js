export default function quizController(QuizService, $log, _){
  'ngInject';

  let vm = this;
  //'Public' functions
  vm.answerQuestion = answerQuestion;
  vm.nextQuestion = nextQuestion;

  //public vars
  vm.state = null;


  //private vars
  let questions = [];

  init();

  function init(){

    vm.state = null;
    vm.right = 0;
    vm.wrong = 0;
    refreshList();
  }

  function refreshList(){
    QuizService.getList().then(
      function(response){
        questions = response.data || [];
        nextQuestion();
      },
      //TODO better error handling
      (error) => ($log.error('Error getting quiz list', error))
    );
  }


  function answerQuestion(id, answer){
    QuizService.answer(id, {answer: vm.answer}).then(
      function(response){
        if(response.data.correct){
          vm.state = 'right';

          vm.right++;
          //
          // vm.quizForm.$setValidity();
          // vm.quizForm.$setPristine();
          // vm.quizForm.$setUntouched();

        } else {
          vm.state = 'wrong';
          vm.wrong++;
        }

      },
      //TODO better error handling
      (error) => ($log.error('Error answering question ' + id, error))
    );
  }

  function nextQuestion(){
    if(questions.length === 0 ){
      vm.state = 'done';
    } else {
      vm.currentQuestion = questions.shift();
      vm.answer = null;

      // vm.quizForm.$setValidity();
      // vm.quizForm.$setPristine();
      // vm.quizForm.$setUntouched();

      vm.state = null;
    }
  }
}
