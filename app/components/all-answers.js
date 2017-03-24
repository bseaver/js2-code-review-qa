import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
    },
    updateAnswer(answer, params) {
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
