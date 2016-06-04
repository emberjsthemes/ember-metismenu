import Ember from 'ember';
import layout from '../templates/components/ember-metismenu';

export default Ember.Component.extend({
  layout: layout,
  tagName:    'ul',
  classNames: 'metismenu',

  didInsertElement: function() {
    this.$().metisMenu();
  }
});
