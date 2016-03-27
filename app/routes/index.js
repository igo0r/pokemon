import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let pokemons = this.store.query('pokemon', {
      limit: 12,
      offset: 0
    });
    return {pokemons: pokemons, types: []};
  },
  setupController: function (controller, model) {
    // Call _super for default behavior
    this._super(controller, model);
    // Implement your custom setup after
    let filteredPokemons = Ember.copy(model);
    controller.set('filteredPokemons', filteredPokemons);
    controller.set("disableLoadMore", true);
  }
});
