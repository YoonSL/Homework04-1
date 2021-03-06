
let employee = {
  empList: employeeList,
  comList: commandList
}

// const render = function(){
//   let htmlContent = '<h1> RegistrantList </h1>';
//   employee = {...employee}
//   employee.empList.name.forEach(e => htmlContent += `<p> ${e} </p>`);
//   $('#content').html(htmlContent);
// }

// render();

//This function is called when the print button @nav bar is clicked.
//It prints out the list of employees.

const print = function (event) {
  event.preventDefault();
  $('#content').empty();
  for (let i = 0; i < employeeList.length; i++) {

    $('#content').append(`<h1>${employee.empList[i].name}</h1>`);
    $('#content').append(`<h1>${employee.empList[i].officeNum}</h1>`);
    $('#content').append(`<h1>${employee.empList[i].phoneNum}</h1></br>`);
  }
}

//This function is called when the verify button @nav bar is clicked.
//changes the content area to verify section.

const verify = function (event) {
  event.preventDefault();
  $('#content').empty();

  $('#content').append(`<div class = center><input id = "verifyInput" placeholder="Who would you like to verify?"/><button class = "innerButtons" id = "innerVerify">Verify</button></div>`);
  $('#content').append(`<h1 class = "pageText" id = "verifyText"></h1>`);
  $('#content').append(`</br><h1 id = "trueOrFalse"></h1>`)
  $('#verifyText').text('EmployeeFound');

  //This function is called when the Verify button @ content is clicked.
  //It checks the if the employee a user is looking for exists and prints true or false.

  const yesNo = function (event) {
    event.preventDefault();
    const verifyWord = $('#verifyInput').val();
    const verifyWordCase = verifyWord.toLowerCase();
    const verifyBoolean = employee.empList.some(e => e.name.toLowerCase() === verifyWordCase);
    $('#trueOrFalse').text(verifyBoolean);
  }

  $('#innerVerify').onClick('click', yesNo);
}

//This function is called when the lookup button @nav bar is clicked.
//changes the content area to lookup section.

const lookup = function (event) {
  event.preventDefault();
  $('#content').empty();
  $('#content').append(`<div class = "center"><input id = "lookupInput" placeholder="Who would you like to lookup?"/><button class = "innerButtons" id = "innerLookup">Lookup</button></div>`);
  $('#content').append(`<h1 class = "pageText" id = "lookupText">EmployeeFound</h1>`);
  $('#content').append(`<h1 id = "lookupInfo"></h1>`)
  $('#lookupText').text('');

  //This function is called when the Lookup button @content is clicked.
  //It checks the if the employee a user is looking for exists and shows the user information of the search.

  const lookupWho = function (event) {
    event.preventDefault();
    const lookupWord = $('#lookupInput').val();
    const lookupWordCase = lookupWord.toLowerCase();
    const lookupInformation = employee.empList.filter(e => e.name.toLowerCase() === lookupWordCase);

    if (lookupInformation.length == 0) {
      $('#lookupInfo').text('No one of that name');
    } else {
      const lookupValue = Object.values(lookupInformation[0]);
      $('#lookupInfo').text(lookupValue[0]);
      $('#lookupInfo').append(`</br>${lookupValue[1]}`);
      $('#lookupInfo').append(`</br>${lookupValue[2]}`);
    }
  }

  $('#innerLookup').onClick('click', lookupWho);
}

//This function is called when the contains button @nav bar is clicked.
//changes the content area to contains section.

const contains = function (event) {
  event.preventDefault();
  $('#content').empty();
  $('#content').append(`<div class = "center"><input id = "containsInput" placeholder="Which charaters are in the name?"/><button class = "innerButtons" id = "innerContains">Contains</button></div>`);
  $('#content').append(`<h1 class = "pageText" id = "containsText">EmployeeFound</h1>`);
  $('#content').append(`<h1 id = "containsInfo"></h1>`)
  $('#containsText').text('');


  //This function is called when the Contains button @content is clicked.
  //It checks the if the employee a user is looking with string value exists and shows the user information of the search.

  const containsWho = function (event) {
    event.preventDefault();
    $('#containsInfo').empty();
    const containsWord = $('#containsInput').val();
    const containsWordCase = containsWord.toLowerCase();
    const containsInformation = employee.empList.filter(e => e.name.toLowerCase().includes(containsWordCase));

    if (containsInformation.length == 0) {
      $('#containsInfo').text('No one of that name');
    } else {
      for (let i = 0; i < containsInformation.length; i++) {
        const containsValue = Object.values(containsInformation[i]);
        for (let j = 0; j < containsValue.length; j++) {
          const containsValueNum = containsValue[j];
          $('#containsInfo').append(`${containsValueNum}</br>`);
        }
      }
    }
  }

  $('#innerContains').onClick('click', containsWho);
}

//This function is called when the update button @nav bar is clicked.
//changes the content area to update section.

const update = function (event) {
  event.preventDefault();
  $('#content').empty();
  $('#content').append(`<div class = "center"> <p class = "greyWord">Name</p> <input id = "updateName"/>`);
  $('#content').append(`<div class = "center"> <p class = "greyWord">Number</p> <input id = "updateOffNum"/>`);
  $('#content').append(`<div class = "center"> <p class = "greyWord">Phone</p> <input id = "updatePhoneNum"/>`);
  $('#content').append(`<button id = "innerUpdate"> Update </button>`);
  $('#content').append(`<h1 class = "pageText" id = "updateText">EmployeeFound</h1>`);
  $('#content').append(`<h1 id = "updateInfo"></h1>`)
  $('#updateText').text('');

  //This function is called when the Update button @content is clicked.
  //It checks the if the employee a user is looking for and takes an input of the changed information and updates it.

  const updateWho = function (event) {
    event.preventDefault();
    $('#updateInfo').empty();
    let updateName = $('#updateName').val();
    let updateOff = $('#updateOffNum').val();
    let updatePhone = $('#updatePhoneNum').val();

    let updateNameCase = updateName.toLowerCase();

    for (let i = 0; i < employeeList.length; i++) {
      const containName = employee.empList[i].name;
      const containNameCase = containName.toLowerCase();

      if (updateNameCase === containNameCase) {
        employee.empList[i].officeNum = '#' + updateOff;
        employee.empList[i].phoneNum = updatePhone;

        $('#updateInfo').text(employee.empList[i].name);
        $('#updateInfo').append(`</br>${employee.empList[i].officeNum}`);
        $('#updateInfo').append(`</br>${employee.empList[i].phoneNum}`);

      }
    }
  }
  $('#innerUpdate').onClick('click', updateWho);
}

//This function is called when the add button @nav bar is clicked.
//changes the content area to add section.

const add = function (event) {
  event.preventDefault();
  $('#content').empty();
  $('#content').append(`<div class = "center"> <p class = "greyWord">Name</p> <input id = "addName"/>`);
  $('#content').append(`<div class = "center"> <p class = "greyWord">Number</p> <input id = "addOffNum"/>`);
  $('#content').append(`<div class = "center"> <p class = "greyWord">Phone</p> <input id = "addPhoneNum"/>`);
  $('#content').append(`<button id = "innerAdd"> Add </button>`);
  $('#content').append(`<h1 class = "pageText" id = "addText">EmployeeFound</h1>`);
  $('#content').append(`<h1 id = "addInfo"></h1>`)
  $('#addText').text('');

  //This function is called when the Add button @content is clicked.
  //It takes in new employee's information and adds it to the list.

  const addWho = function (event) {
    event.preventDefault();
    $('#updateInfo').empty();
    let addName = $('#addName').val();
    let addOff = $('#addOffNum').val();
    let addPhone = $('#addPhoneNum').val();

    var newEmployee = {
      name: addName,
      officeNum: addOff,
      phoneNum: addPhone
    }

    employeeList.push(newEmployee);

    $('#addInfo').text(addName);
    $('#addInfo').append(`</br>#${addOff}`);
    $('#addInfo').append(`</br>${addPhone}`);
  }
  $('#innerAdd').onClick('click', addWho);
}

const deletes = function(event){
    event.preventDefault();
    $('#content').empty();
    $('#content').append(`<div class = "center"><input id = "deleteInput" placeholder="Who would you like to delete?"/><button class = "innerButtons" id = "innerDelete">Delete</button></div>`);
    $('#content').append(`<h1 class = "pageText" id = "deleteText">EmployeeFound</h1>`);
    $('#content').append(`<h1 id = "deleteInfo"></h1>`)
    $('#deleteText').text('');
  
    //This function is called when the Lookup button @content is clicked.
    //It checks the if the employee a user is looking for exists and shows the user information of the search.
  
    const deleteWho = function (event) {
      event.preventDefault();
      const deleteWord = $('#deleteInput').val();
      const deleteWordCase = deleteWord.toLowerCase();
  
      for (let i = 0; i < employeeList.length; i++) {
        const deleteName = employee.empList[i].name;
        if (deleteName.toLowerCase() === deleteWordCase) {
          
          delete employeeList[i].name;
          delete employeeList[i].officeNum;
          delete employeeList[i].phoneNum;
        }
      }
    }
  
    $('#innerDelete').onClick('click', deleteWho);
  }











//This function is called when the list button @nav bar is clicked.
//changes the content area to list section.
//It prints out the list of commands and what they do.

const list = function (event) {
  event.preventDefault();
  $('#content').empty();
  for (let i = 0; i < commandList.length; i++) {

    $('#content').append(`<h1>${employee.comList[i].commands} &nbsp ${employee.comList[i].description}</h1></br>`);

  }
}

$('.print').onClick('click', print);
$('.verify').onClick('click', verify);
$('.lookup').onClick('click', lookup);
$('.contains').onClick('click', contains);
$('.update').onClick('click', update);
$('.add').onClick('click', add);
$('.delete').onClick('click', deletes);
$('.list').onClick('click', list);














  // for(let i = 0; i< employeeList.length; i++){
  //   // const employeeName = Object.entries(employeeList[i]);
  //   // const employeeNameKey = Object.keys(employeeList[i]);
  //   const employeeNameValue = Object.values(employeeList[i].name);
  //   // $('#content').append(`<h1>${employeeNameKey}</h1>`);
  //   $('#content').append(`<h1>${employee.empList[i].name}</h1>`);
  //   $('#content').append(`<h1>#${employee.empList[i].officeNum}</h1>`);
  //   $('#content').append(`<h1>${employee.empList[i].phoneNum}</h1></br>`);
  // }

// const render = function() {
//   for (let i = 0; i < employeeList.length; i++) {
//     // employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum
//   $('#content').append(`<div>${employeeList.name}</div>`);
//   console.log(employeeList);

// }
// }

// render()



// const render = function(whichList){
//   for(let i = 0; i < whichList.length; i++){
//     // $('.content').html(`<div>${whichList}</div>`);
//     $('.content').html(employeeList[i].name);
//     console.log(employeeList[i]);
//     console.log(i);
//   }

// }
// const print = function(event){
//   event.preventDefault(); 
//   render(employeeList);

// }
// $('.print').onClick('click',print);


// // command section this code below will ask the user for the command
// // const commands = function (question) {
// //   const command = prompt(question);
// //   return command;
// // }
// let repeatBool = false;

// while (repeatBool != true) {

//   const command = prompt('which command would you like to use?');

//   // if section for the print command
//   if (command.toLowerCase() === 'print') {
//     for (let i = 0; i < employeeList.length; i++) {
//       render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
//     }
//     repeatBool = true;
//   }
//   // if section for the verify command 
//   else if (command.toLowerCase() === 'verify') {
//     const verifyName = prompt('Which employee would you like to verify?');
//     let trueFalse = 'false';
//     for (let i = 0; i < employeeList.length; i++) {
//       const checkName = employeeList[i].name;
//       if (checkName.toUpperCase() === verifyName.toUpperCase()) {
//         trueFalse = 'true';
//       }
//     }
//     render(trueFalse);
//     repeatBool = true;
//   }
//   // if section for the lookup command
//   else if (command.toLowerCase() === 'lookup') {
//     const lookupName = prompt('Which employee would you like to lookup?');
//     let lookupNumber = '0';
//     let employeeUpper = '0';
//     for (let i = 0; i < employeeList.length; i++) {
//       const checkName = employeeList[i].name;
//       if (checkName.toUpperCase() === lookupName.toUpperCase()) {
//         lookupNumber = i;
//         employeeUpper = employeeList[lookupNumber].name;
//       }
//     }
//     if (employeeUpper.toUpperCase() === lookupName.toUpperCase()) {
//       render(employeeList[lookupNumber].name, employeeList[lookupNumber].officeNum, employeeList[lookupNumber].phoneNum);
//     } else {
//       render("None");
//     }
//     repeatBool = true;
//   }
//   // if section for the contains command
//   else if (command.toLowerCase() === 'contains') {
//     const containString = prompt("Which letter of the employee whould you like to look at?");

//     for (let i = 0; i < employeeList.length; i++) {

//       const containName = employeeList[i].name;
//       var upperName = containName.toLowerCase();
//       var upperString = containString.toLowerCase();
//       if (upperName.includes(upperString)) {
//         render(employeeList[i].name);
//       }
//     }
//     repeatBool = true;
//   }
//   // if section for the update command
//   else if (command.toLowerCase() === 'update') {
//     const updateName = prompt("Which employee's imformation would you like to change?");
//     const updateField = prompt("Which field would you like to change(office number or phone number?");
//     const updateValue = prompt("Please tell us the new information");

//     for (let i = 0; i < employeeList.length; i++) {
//       const containName = employeeList[i].name;
//       var upperName = containName.toLowerCase();
//       var upperString = updateName.toLowerCase();
//       if (upperName === updateName && updateField === 'office number') {
//         employeeList[i].officeNum = updateValue;
//         render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);

//       } else if (upperName === updateName && updateField === 'phone number') {
//         employeeList[i].phoneNum = updateValue;
//         render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);

//       }
//     }
//     repeatBool = true;
//   }

//   // if section for the add command

//   else if (command.toLowerCase() === 'add') {
//     const addName = prompt("What is the name of the new employee");
//     const addOffice = prompt("What is the new employee's office number?");
//     const addTelephone = prompt("what is the new employee's telephone number?");

//     var newEmployee = {
//       name: addName,
//       officeNum: addOffice,
//       phoneNum: addTelephone
//     }

//     employeeList.push(newEmployee);

//     for (let i = 0; i < employeeList.length; i++) {
//       render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
//     }
//     repeatBool = true;

//   }

//   // if section for the delete command

//   else if (command.toLowerCase() === 'delete') {
//     const deleteEmployee = prompt("What is the name of the employee to be deleted");

//     for (let i = 0; i < employeeList.length; i++) {
//       const deleteName = employeeList[i].name;
//       if (deleteName.toLowerCase() === deleteEmployee.toLowerCase()) {
//         delete employeeList[i].name;
//         delete employeeList[i].officeNum;
//         delete employeeList[i].phoneNum;
//       }
//     }

//     for (let i = 0; i < employeeList.length; i++) {
//       render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
//     }
//     repeatBool = true;
//   }
//   else if (command.toLowerCase() === 'fix') {
//     const fixEmployee = prompt("Which employee's name would to like to change?");
//     const fixedEmployee = prompt("What is the correct name of the employee?")
//     for (let i = 0; i < employeeList.length; i++) {
//       const containName = employeeList[i].name;
//       var upperName = containName.toLowerCase();
//       var updateName = fixEmployee.toLowerCase();

//       if (upperName === updateName) {
//         employeeList[i].name = fixedEmployee;
//         for (let i = 0; i < employeeList.length; i++) {
//           render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
//         }
//       } 
//     }
//     repeatBool = true;

//   }
//   else if(command.toLowerCase() === 'list'){
//     for(let i = 0; i < commandList.length; i++){
//       render(commandList[i].commands,commandList[i].description);
//     }
//     repeatBool = true;
//   }
// }
