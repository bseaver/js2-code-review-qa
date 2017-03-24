import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,

  actions: {
    questionFormShow(){
      this.set('addNewQuestion', true);
    },
    saveQuestion(){
      var params = {
        "qu_author": this.get('qu_author'),
        "qu_title": this.get('qu_title'),
        "qu_notes": this.get('qu_notes')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
