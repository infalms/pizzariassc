var ApplicationRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('pizzeria');
	}
});

export default ApplicationRoute;
