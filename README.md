# Questions and Answer Message Board

## By Benjamin T. Seaver

## Epicodus JavaScript Week 2 Code Review featuring Ember.

Create a question and answer message board where a user submits a question and other users can respond with answers.

* Questions should have the content of the question itself, an author and additional notes.
* Answers should have the content of the answer and the author.
* Include a header and/or navbar that appears on all pages containing the name of your site and a link to the home page.
* List all questions on the homepage, with only the question and the name of the author showing.
* Users should be able to click on a question, and be routed to another page containing additional information.
* Allow users to add and edit questions.
* Allow users to add answers to a question. Answers should be added and viewed on the same page as the question they respond to.

* Objectives - Your code will be reviewed for the following objectives:
  * Application template contains header with link(s).
  * Data is stored in and retrieved from Ember Data models and Firebase.
  * Components are used to create display and behavior for your templates.
  * One-to-many relationship exists between Question and Answers.
  * Application works as expected.
  * Project is in a presentable, portfolio-quality state.
  * Required functionality is in place by Friday deadline.
  * Code and Git documentation follow best practices, including a planning section in your readme as described in this weeks documentation lesson.
  * Project demonstrates understanding of week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.

* Further Exploration - If you have completed the objectives for the code review, consider adding some additional features:
  * Add custom styling.
  * Implement upvote/downvote functionality so that users may vote on answers.
Add tags to questions.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd qa`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Implementation plan
* Create new ember project
* Verify Welcome Screen
* Update README.md with Implementation plan
* Commit README.md, then initial framework

* Install bootstrap
* Create routes for index, contact, about
* Create bootstrap navbar for routes and index
* Verify routes and navigation

* Create sample model json file
* Create Firebase app and import json

* Install Firebase adaptor (ember server restart needed)
* Create models
* Display initial data on index

* Create Add Update Delete for Question with
* Question Route, Components, forms and action code

* Create Add, Edit, Delete of Reviews on Questions
* Using Components

## Bash Commands used:
* ember new qa `(from Desktop)`
* `git status, git reset, git add, git commit`
* npm install `after clone`
* bower install `(no apparent effect on School mac)`

* ember install ember-bootstrap
* ember g component nav-bar
* ember g route index
* ember g route about
* ember g route contact

* ember install emberfire
* ember g model question
* ember g model answer
* ember g component question-tile

* ember g route question



##### End of File
