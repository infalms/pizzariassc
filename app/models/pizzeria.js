export default DS.ParseModel.extend({
    pizzeriaName: DS.attr('string'),
    cityName: DS.hasMany('city')
});