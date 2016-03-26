import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pokemon-preview', 'Integration | Component | pokemon preview', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pokemon-preview}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pokemon-preview}}
      template block text
    {{/pokemon-preview}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
