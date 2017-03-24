import DS from 'ember-data';

export default DS.Model.extend({
  an_notes: DS.attr(),
  an_author: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});
