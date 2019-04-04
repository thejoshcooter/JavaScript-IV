class Person {
  constructor(name,age,location,gender) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.gender = gender;
  }
  
  speak() {
    return `Hello my name is ${this.name} and I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(name,age,location,gender,specialty,favLanguage,catchPhrase) {
    super(name,age,location,gender);
    this.specialty = specialty;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
  }
  
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  
  grade(student,subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(name,age,location,gender,previousBackground,className,favSubjects) {
    super(name,age,location,gender);
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
    }
  
  listsSubjects() {
      for (let i = 0; i < this.favSubjects.length; i++) {
        console.log(this.favSubjects[i]);
      }
    }
    
  PRAssignment(subject) {
      return `${this.name} has submitted a PR for ${subject}`;
    }   
  
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(name,age,location,gender,specialty,favLanguage,catchPhrase,gradClassName,favInstructor) {
    super(name,age,location,gender,specialty,favLanguage,catchPhrase);
    this.gradClassName = gradClassName;
    this.favInstructor = favInstructor;
  }
  
  standup(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  
  debugsCode(student,subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}'`;
  }
}


