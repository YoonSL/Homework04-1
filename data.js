/////////////////////////////////////////////
//                  Data                   //
/////////////////////////////////////////////



const employeeList = [
    {
      name: 'Jan',
      officeNum: 1,
      phoneNum: '222-222-2222'
    },
    {
      name: 'Juan',
      officeNum: 304,
      phoneNum: '489-789-8789'
    },
    {
      name: 'Margie',
      officeNum: 789,
      phoneNum: '789-789-7897'
    },
    {
      name: 'Sara',
      officeNum: 32,
      phoneNum: '222-789-4654'
    },
    {
      name: 'Tyrell',
      officeNum: 3,
      phoneNum: '566-621-0452'
    },
    {
      name: 'Tasha',
      officeNum: 213,
      phoneNum: '789-766-5675'
    },
    {
      name: 'Ty',
      officeNum: 211,
      phoneNum: '789-766-7865'
    },
    {
      name: 'Sarah',
      officeNum: 345,
      phoneNum: '222-789-5231'
    }
  ];
  
  const commandList = [
    {
    commands:'print:',
    description: 'Prints out the list of commands.'
   },
   {
    commands:'verify:',
    description: 'Checks if the employee exists.'
    },
    {
      commands:'lookup:',
      description: "Prints out one of the employee's information."
    },
    {
      commands: 'contains:',
      description: "Prints out all of the imformation of the employees whose name contain the given string."
    },
    {
        commands: 'update:',
        description: 'Changes the information for the chosen employee.'
    },
    {
      commands: 'add:',
      description: 'Adds knew employee to the list.'
    },
    {
      commands: 'delete:',
      description: 'Removes the chosen employee.'
    },
    {
      commands: 'fix:',
      description: 'Changes the name of the employee.'
    },
    {
      commands: 'list:',
      description: 'Displays the list of commands.'
    }
  ];
  