import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,

  actions: {
    answerFormShow(){
      this.set('addNewAnswer', true);
    },
    saveAnswer(){
      var params = {
        "an_author": this.get('an_author'),
        "an_notes": this.get('an_notes'),
        "question": this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
      this.set('an_author', '');
      this.set('an_notes', '');
    }
  }
});
