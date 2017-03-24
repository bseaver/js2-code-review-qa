import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  actions: {
    showUpdateForm() {
      this.set('updateForm', true);
    },
    updateAnswer(answer) {
      var params = {
        'an_author': this.get('an_author'),
        'an_notes': this.get('an_notes'),
        'question': this.get('question')
      };
      this.set('updateForm', false);
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
