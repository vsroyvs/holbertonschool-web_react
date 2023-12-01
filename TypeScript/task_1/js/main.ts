
interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    [key: string]: any,
  }
  
  interface Directors extends Teacher {
    numberOfReports: number,
  }
  
  interface printTeacherFunction {
    firstName: string, 
    lastname: string,
  }
  
  function printTeacher (firstName: Teacher["firstName"], lastName: Teacher["lastName"]) {
    const sliptFirstName = firstName.split('');
    const firstElement = sliptFirstName[0];
    return (`${firstElement}.${lastName}`);
  }
  
  interface IStudentClass {
    firstName: string,
    lastName: string,
  }
  
  class StudentClass implements IStudentClass{
    firstName: string;
    lastName: string;
  
    constructor (firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
   
    workOnHomework() {
      return "Currently working";
    }
    displayName() {
      return this.firstName;
    }
  }
  
