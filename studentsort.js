var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


//check if a > b lexicographically, if yes, pass 1, then compare to see if a.name < b.name
function customcomparator(students){
	return students.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1: 0);
}


console.log(customcomparator(students));
