import mockAppModule from '../../mockAppModule.js';

import questionsModule from '../../../../app/components/questions/questions.js';

ngDescribe({
  name: 'Questions Component test',
  modules: [questionsModule, mockAppModule],
  inject: ['$httpBackend'],
  element: '<questions></questions>',
  http: {
    get: {
      '/api/questions': [{id: 1}, { id:2 }]
    }
  },
  tests: function(deps){
    beforeEach(function(){

    });

    it('should assign Mock questions to $ctrl.questions', function(){
      var ctrl = deps.element.isolateScope().$ctrl;
      deps.step();

      expect(ctrl.questions).toEqual([{id: 1}, { id:2 }]);
    });
  }
})
