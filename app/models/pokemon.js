import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  abilities: DS.attr(),
  national_id: DS.attr(),
  types: DS.attr(),
  attack: DS.attr(),
  defense: DS.attr(),
  hp: DS.attr(),
  sp_atk: DS.attr(),
  sp_def: DS.attr(),
  speed: DS.attr(),
  weight: DS.attr(),
  total: DS.attr()
});
