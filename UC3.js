let fulltime = 8;
let parttime = 4;
let rate = 20;
let empwage = 0;
let empshift = Math.floor(Math.random() * 10) % 2
switch (empshift) {
    case 0:
        empwage = rate * parttime;
        console.log("Employee is working Part time & the wage is " + empwage)
        break;
    case 1:
        empwage = rate * fulltime;
        console.log("Employee is working Full time & the wage is " + empwage)
        break;
        
    default:
        console.log("Error404")
        break;
}