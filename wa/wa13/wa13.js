//Assisted help with editing in chatgpt
//Problem 1
//Creating JSON for each employee
let employees = [
    {
      firstName: "Sam",
      department: "Tech",
      designation: "Manager",
      salary: 40000,
      raiseEligible: true
    },
    {
      firstName: "Mary",
      department: "Finance",
      designation: "Trainee",
      salary: 18500,
      raiseEligible: true
    },
    {
      firstName: "Bill",
      department: "HR",
      designation: "Executive",
      salary: 21200,
      raiseEligible: false
    }
  ];
  
  console.log("Employees JSON:", employees);
  
  //Problem 2
  //Creating JSON for the company
  let company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
  };
  
  console.log("Company JSON:", company);
  
  //Problem 3
  //Adding a new employee to the company
  let newEmployee = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
  };
  
  company.employees.push(newEmployee);
  console.log("Company JSON with new employee:", company);
  
  //Problem 4
  //Calculating total salary for all company employees
  let totalSalary = company.employees.reduce((acc, employee) => acc + employee.salary, 0);
  console.log("Total salary for all company employees:", totalSalary);
  
  //Problem 5
  //Applying a raise of 10% to eligible employees and updating raise eligibility
  company.employees.forEach(employee => {
    if (employee.raiseEligible) {
      employee.salary *= 1.10;
      employee.raiseEligible = false;
    }
  });
  console.log("Company JSON after applying raise:", company);
  
  //Problem 6
  //Updating the company JSON to indicate who is working from home
  let employeesWorkingFromHome = ['Anna', 'Sam'];
  company.employees.forEach(employee => {
    if (employeesWorkingFromHome.includes(employee.firstName)) {
      employee.wfh = true;
    } else {
      employee.wfh = false;
    }
  });
  console.log("Company JSON with updated WFH status:", company);