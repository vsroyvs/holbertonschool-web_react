interface Student {
    firstName: string;
    LastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Juan',
    LastName: 'Perez',
    age: 18,
    location: 'Huancayo'
};


const student2: Student = {
    firstName: 'Juana',
    LastName: 'Cubana',
    age: 19,
    location: 'Puno'
};

const studentsList: Array<Student> = [student1, student2];

//Create a table
const table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach(function(student){
  const tr = table.insertRow();
  const firstNameCell = tr.insertCell(0);
  const locationCell = tr.insertCell(1);
    
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});