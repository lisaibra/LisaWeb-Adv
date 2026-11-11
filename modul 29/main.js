var programinglanguges=['Javascript' ,'PHP','Python'];

console.log(programinglanguges);
console.log(programinglanguges[0]);

programinglanguges.push('Java');
console.log(programinglanguges);

programinglanguges.pop();
console.log(programinglanguges);

programinglanguges.unshift('c#');
console.log(programinglanguges);

programinglanguges.shift();
console.log(programinglanguges);

programinglanguges.splice(0, 2 ,"Ruby");
console.log(programinglanguges);

console.log(Math.random()*5);

console.log(Math.floor(Math.random()*5));

var students=['Student1','Student2'];

var[s1,s2]=students;

console.log(s1);
console.log(s2);

var places = ['London','Paris','New York','Berlin'];

var[firstPlace,secondPlace]=places;

console.log(secondPlace);

var numbers=[1,2,3,4,5,6,7,8,9,10];

var[first,second,...otherNumbers]=numbers;

console.log(first);
console.log(second);
console.log(otherNumbers.toLocaleString());












