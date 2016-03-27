import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  primaryKey: 'national_id',
  keyForAttribute: function (attr) {
    return Ember.String.underscore(attr);
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    payload.data = payload.objects;

    payload.objects.forEach(function(i, index){
      payload.data.get(index).type = primaryModelClass.modelName;
      payload.data.get(index).id = i.national_id;
      payload.data.get(index).attributes = {
        name: i.name,
        abilities: i.abilities,
        national_id: i.national_id,
        types: i.types,
        attack: i.attack,
        defense: i.defense,
        hp: i.hp,
        sp_atk: i.sp_atk,
        sp_def: i.sp_def,
        speed: i.speed,
        weight: i.weight,
        total: i.total
      };
    }, payload);

    delete payload.objects;

    return this._super(...arguments);
  }
});
