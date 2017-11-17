'use strict';

class Question {

  constructor(content){
    this.content = content
    this.save()
  }

  save(){
    this.constructor._All.push(this)
  }

  static All(){
    return this._All
  }
   // return this.All().filter(function(user){
    //  return user.email === email
}
Question._All = []
