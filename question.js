'use strict';

class Question {

  constructor(question){
    this.question = question
    this.save()
  }

  save(){
    this.constructor._All.push(this)
  }

  static All(){
    return this._All
  }
   static Find()
  return this.All().filter(function(question){
     return Question.question[i] === question[i+1]
     // return this.All().filter(function(user){
    //  return user.email === email
}
Question._All = []
