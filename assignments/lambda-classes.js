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
      favSubjects.forEach(function(subject) {
      console.log(subject);
      });
    }
    
  PRAssignment(subject) {
      return `${student.name} has submitted a PR for ${subject}`;
    }   
  
  sprintChallenge(subject) {
    return `${student.name} has begun sprint challenge on ${subject}`;
  }
}



const josh = new Person("Josh",26,"Dallas","m");
const tom = new Instructor("Tom",34,"New York","m","geek","js","blarg");
console.log(tom.grade(josh, "ruby"));