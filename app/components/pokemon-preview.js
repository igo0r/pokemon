import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showDetail() {
      const pokemon = this.get('pokemon');
      this.get('onShowDetail')(pokemon);
    }
  }
});
