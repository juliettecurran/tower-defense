import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['sidebar__stylesheet'],

  selectedTower: Ember.computed('attrs.selectedTower', function () {
    return this.attrs.selectedTower;
  }),

  selectedTowerGroup: Ember.computed('attrs.selectedTowerGroup', function () {
    return this.attrs.selectedTowerGroup;
  })
});
