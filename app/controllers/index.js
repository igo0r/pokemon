import Ember from 'ember';

export default Ember.Controller.extend({
  filteredList: null,
  isLoadMore: false,
  actions: {
    autoComplete(type) {
      this.set('selectedType', type);
      let filteredPokemons = [];
      this.get("model.pokemons.content").forEach(function (i) {
        if (i.get("types").find(e => e.name === type.name) !== undefined) {
          filteredPokemons.pushObject(i);
        }
      });
      this.set("filteredPokemons.pokemons", filteredPokemons);
    }
  }, pokemonUpdated: function () {
    if (this.get("model.pokemons.content") === null) {
      return;
    }
    this.set("model.types", []);

    this.get("model.pokemons.content").forEach(function (item) {
      item.get("types").forEach(function (type) {
        if (this.get("model.types").find(e => e.name === type.name) === undefined) {
          this.get("model.types").pushObject({name: type.name, resource_uri: type.resource_uri});
        }
      }, this);
    }, this);
  }.observes("model.pokemons.content.@each"),
});
