import { helper as buildHelper } from '@ember/component/helper';

export default buildHelper(function([myObj]) {
  return Object.keys(myObj).length;
});
