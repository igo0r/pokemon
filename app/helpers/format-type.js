import Ember from 'ember';

//Got type url "/api/v1/type/9/" and get id *30 for wide different colors
export function formatType(params/*, hash*/) {
  let url = params[0];
  var arr = url.split('/');
  var id = arr.objectAt(arr.length - 2);

  return Ember.String.htmlSafe(id * 30);
}

export default Ember.Helper.helper(formatType);
