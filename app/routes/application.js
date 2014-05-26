var ApplicationRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('city');
	}
});

export default ApplicationRoute;
