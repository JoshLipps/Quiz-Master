#Quiz-Master [![Build Status](https://travis-ci.org/JoshLipps/Quiz-Master.svg?branch=master)](https://travis-ci.org/JoshLipps/Quiz-Master)
Quiz Master

### Folder Structure
folders of note:

  - `app` - main ruby code
  - `frontend` - contains a subproject that builds its own UI code
  - `spec` - automated RSpec tests (exectued by ruby against PRs)

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
