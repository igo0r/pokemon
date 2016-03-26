import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  resource_uri: DS.attr()
});
