export default DS.ParseModel.extend({
    cityName: DS.attr('string'),
    pizzeria: DS.belongsTo('pizzeria')
});