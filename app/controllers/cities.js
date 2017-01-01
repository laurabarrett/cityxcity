import Ember from 'ember';

const SOUTHWICK_LATITUDE = 42.1;
const SOUTHWICK_LONGITUDE = -71.6;
const DEFAULT_ZOOM = 2;

export default Ember.Controller.extend({
  currentCity: Ember.inject.service(),
  latitude: SOUTHWICK_LATITUDE,
  longitude: SOUTHWICK_LONGITUDE,
  zoom: DEFAULT_ZOOM,
  actions: {
    selectCity(city) {
      this.transitionToRoute('cities.city.details', city);
    }
  }
});
