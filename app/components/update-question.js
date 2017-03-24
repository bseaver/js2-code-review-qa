import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  actions: {
    showUpdateForm() {
      this.set('updateForm', true);
    },
    update(question) {
      var params = {
        details: this.get('qu_title'),
        tag: this.get('qu_author'),
        plan: this.get('qu_notes')
      };
      this.set('updateForm', false);
      this.sendAction('update', question, params);
    }
  }
});
