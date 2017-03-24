import DS from 'ember-data';

export default DS.Model.extend({
  "qu_title": DS.attr(),
  "qu_notes": DS.attr(),
  "qu_author": DS.attr(),
  "answers": DS.hasMany('answer', { async: true})
});
