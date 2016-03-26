import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showPokemon(pokemon){
      var self = this;
      self.set('pokemonView', pokemon);
    },
    loadMore() {
      var self = this;
      this.model.pokemons.content.store.findAll('pokemon').then(function (result) {
        self.get('model.pokemons.content').pushObjects(result.content);
      });
      self.set('filteredPokemons', Ember.copy(self.get('model')));
      //this.model.filteredPokemons.set('content', this.model.pokemons.content);
    }
  }
});
