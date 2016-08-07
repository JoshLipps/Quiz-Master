import mockAppModule from '../../mockAppModule.js';

import questionsModule from '../../../../app/components/questions/questions.js';

ngDescribe({
  name: 'Questions Component test',
  modules: [questionsModule, mockAppModule],
  inject: ['$httpBackend'],
  exposeApi: true,

  tests: function(deps, describeApi){


    it('should assign Mock questions to $ctrl.questions', function(){
      deps.$httpBackend.expectGET('/api/questions').respond([{id: 1}, { id:2 }]);
      describeApi.setupElement('<questions></questions>');

      var ctrl = deps.element.isolateScope().$ctrl;
      deps.step();

      expect(ctrl.questions).toEqual([{id: 1}, { id:2 }]);
    });

    it('should assign empty array if questions list is empty', function(){
      deps.$httpBackend.expectGET('/api/questions').respond([]);
      describeApi.setupElement('<questions></questions>');

      var ctrl = deps.element.isolateScope().$ctrl;
      deps.step();

      expect(ctrl.questions).toEqual([]);
    })
  }
})
