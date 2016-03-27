import Ember from 'ember';

export default Ember.Controller.extend({
  filteredList: null,
  isLoadMore: false,
  actions: {
    autoComplete(type) {
      this.set('selectedType', type);
      let filteredPokemons = [];
      if(type === null){
        this.set('filteredPokemons', Ember.copy(this.get('model')));
        return;
      }
      this.get("model.pokemons.content").forEach(function (i) {
        if (i.get("types").find(e => e.name === type.name) !== undefined) {
          filteredPokemons.pushObject(i);
        }
      });
      this.set("filteredPokemons.pokemons", filteredPokemons);
    }
  },
  pokemonUpdated: function () {
    if (this.get("model.pokemons.content") === null) {
      return;
    }

    let content = this.get("model.pokemons.content");
    for (let i = content.get("meta.offset"); i < content.get("content").length; i++) {
      content.objectAt(i).get("types").forEach(function (type) {
        if (this.get("model.types").find(e => e.name === type.name) === undefined) {
          this.get("model.types").pushObject({name: type.name, resource_uri: type.resource_uri});
        }
      }, this);

    }
    if (content.get("meta.next") !== "") {
      this.set("disableLoadMore", false);
    }
    this.set('selectedType', "");
  }.observes("model.pokemons.content.@each")
});
