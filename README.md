#Quiz-Master [![Build Status](https://travis-ci.org/JoshLipps/Quiz-Master.svg?branch=master)](https://travis-ci.org/JoshLipps/Quiz-Master)
Quiz Master

### Application Design
Ruby on Rails for the backend API all behind `/api` endpoints (/api/questions and /api/quiz). RSpec for Tests ans Postgres for DB.

The frontend is Angular and Angular Material put togeather using webpack and babel(for es6 support). all of Ruby's asset pipleline/sprokets are disabled in favor or webpack at the moment but at a future date it should be integrated.

### Infarstructure
This Project is currently automatically deployed to Heroku on commits to master branch. Commits on PRs will be automatically tested using TravisCI.


### Outstanding issues
Please checkout [Issue Tracker](https://github.com/JoshLipps/Quiz-Master/issues)


### Folder Structure
folders of note:

  - `app`      - main ruby/rails code
    `config`   - routes and env config
  - `frontend` - contains a subproject that builds its own UI code
  - `spec`     - automated RSpec tests (exectued by ruby against PRs)


### Specifications
1. Manage questions
 1. CRUD operations for questions
 1. Question should include
  1. Question content
```
Example: How many letters are there in the English alphabet?
```
  1. Answer to the question  
```
  Example: 26
```  
  1. Allow user to provide formatting for the question content
1. Quiz mode
 1. Show a question and user should be able to submit an answer
 1. App should be able to check and handle cases wherein answer is correct or incorrect
 1. In cases wherein the answer is/contains a number, it should recognise the number as words
```
Example:
Q: How many vowels are there in the English alphabet?
A: 5
­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­
Answer by user on Quiz mode: 5 CORRECT
Answer by user on Quiz mode: five CORRECT
Answer by user on Quiz mode: 6 INCORRECT
Answer by user on Quiz mode: six INCORRECT
```
1. Tests for your code (RSpec)
 1. Model, controller and/or feature tests
