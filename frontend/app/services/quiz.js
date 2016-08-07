export default function QuizsService($http){
  'ngInject';

  let quizUrlBase = '/api/quizs';

  return {
    getList: getList,
    answer: answer
  };

  function getList(config){
    return $http.get(quizUrlBase, config);
  }

  function answer(id, config){
    return $http.put(quizUrlBase + '/' + id, config);
  }

}
