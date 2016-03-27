import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showPokemon(pokemon){
      var self = this;
      self.set('pokemonView', pokemon);
    },
    loadMore() {
      var self = this;
      self.set("disableLoadMore", true);
      this.model.pokemons.content.store.query('pokemon', {
        limit: 12,
        offset: this.model.pokemons.content.meta.offset + this.model.pokemons.content.meta.limit
      }).then(function (result) {
        self.get('model.pokemons.content').set('meta', result.meta);
        self.get('model.pokemons.content').pushObjects(result.content);
      });
      self.set('filteredPokemons', Ember.copy(self.get('model')));
    }
  }
});
