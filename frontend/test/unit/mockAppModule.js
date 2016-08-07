
import 'angular';
import 'angular-mocks';
import 'ng-describe';

import _ from 'lodash';

export default angular.module('mockApp', [])
  .value('_',_)
  .name;
