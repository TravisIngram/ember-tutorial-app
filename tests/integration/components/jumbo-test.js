import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | jumbo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders content inside jumbo header with tomster', async function (assert) {
    await render(hbs`<Jumbo>Hello World</Jumbo>`);

    // assert.equal(this.element.textContent.trim(), '');
    // assert.equal(this.element.textContent.trim(), 'template block text');

    assert.dom('.jumbo').exists();
    assert.dom('.jumbo').hasText('Hello World');
    assert.dom('.jumbo .tomster').exists();
  });
});
