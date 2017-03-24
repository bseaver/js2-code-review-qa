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
    },

    update(question, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question');
    },

    deleteAnswer(answer){
      if (confirm('Delete answer by: "' + answer.get('an_author') + '"?')) {
        answer.destroyRecord();
        this.transitionTo('question');
      }
    },

    updateAnswer(answer, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          answer.set(key,params[key]);
        }
      });
      answer.save();
      this.transitionTo('question');
    }
  }
});
