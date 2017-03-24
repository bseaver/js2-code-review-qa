import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    delete(question) {
      if (confirm('Delete question: "' + question.get('qu_title') + '"?')) {
        question.destroyRecord();
        this.transitionTo('index');
      }
    }
  }
});
