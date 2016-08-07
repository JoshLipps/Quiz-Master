export default function QuestionsService($http){
  'ngInject';

  let questionsUrlBase = '/api/questions';

  return {
    get: get,
    getList: getList,
    update: update,
    save: save,
    remove: remove
  };

  function get(id, config){
    return $http.get(questionsUrlBase + '/' + id, config);
  }

  function getList(config){
    return $http.get(questionsUrlBase, config);
  }

  function update(id, config){
    return $http.put(questionsUrlBase + '/' + id, config);
  }

  function save(config){
    return $http.post(questionsUrlBase, config);
  }

  function remove(id, config){
    return $http.delete(questionsUrlBase + '/' + id);
  }

}
