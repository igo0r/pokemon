import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pokemon-view', 'Integration | Component | pokemon view', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pokemon-view}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pokemon-view}}
      template block text
    {{/pokemon-view}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
