var inquirer = require('inquirer');
var mysql = require('mysql');
var consTable = require('console.table');

// Add connection to SQL

var connection = mysql.createConnection({
	host: 'localhost',

	// Your port; if not 3306
	port: 3306,
	// your username

	user: 'root',

	// Your password
	password: 'linequeen1',
	database: 'employee_db',
});

// Connect to mySql server and databased

connection.connect(function (err) {
	if (err) throw err;
	console.log('connectd as id  ' + connection.threadId);
	runSearch();
});

// Functionality of application

function runSearch() {
	inquirer
		.prompt({
			name: 'action',
			type: 'list',
			message: 'What would you like to do?',
			choices: ['View', 'Add', 'Update', 'Exit'],
		})
		.then(function (res) {
			switch (res.action) {
				case 'View':
					view();
					break;

				case 'Add':
					add();
					break;

				case 'Update':
					updateEmployee();
					break;

				case 'Exit':
					console.table('____________________________');
					console.log('All done');
					console.table('________________________');
					break;
				default:
					console.log('default');
			}
		});
}
function add() {
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'add',
      message:'Please select to add',
      choices: ['All employees', 'By department', 'By role'],
    }
  ]).then(answer =>{
    switch (answer.add){
      case 'All employees':
					addAllEmployees();
					break;
				case 'By department':
					addByDepartment();
					break;
				case 'By role':
					addByRole();
				default:
					console.log('default');
      }
    });
}

function add() {
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'update',
      message:'Please select to update',
      choices: ['All employees', 'By department', 'By role'],
    }
  ]).then(answer =>{
    switch (answer.update){
      case 'All employees':
					updateAllEmployees();
					break;
				case 'By department':
					updateByDepartment();
					break;
				case 'By role':
					updateByRole();
				default:
					console.log('default');
      }
    });
}
function addByDepartment(){
  inquirer
  .prompt([
    {
      type:'input',
      message:'What is your department?',
      name: 'section',
    }
  ])
  .then(function(res){
    connection.query("INSERT into department(section)VALUES(?)",res.section,function(err){
      console.log("Department added")
      runSearch();
    })
  })
}
// View function

function view() {
	inquirer
		.prompt([
			{
				type: 'list',
				name: 'view',
				message: 'Please select one to view',
				choices: ['All employees', 'By department', 'By role'],
			},
		])
		.then(function (res) {
			switch (res.view) {
				case 'All employees':
					viewAllEmployees();
					break;
				case 'By department':
					viewByDepartment();
					break;
				case 'By role':
					viewByRole();
				default:
					console.log('default');
			}
		});
}

function viewAllEmployees() {
	connection.query('SELECT * FROM employee', function (err, res) {
		if (err) throw err;
		console.table(res);
	runSearch();
	});
}
function viewByDepartment() {
	connection.query('SELECT * FROM department', function (err, res) {
		if (err) throw err;
		console.table(res);
		runSearch();
	});


}



function viewByRole() {
  connection.query('SELECT * FROM role', function (err, res) {
    if (err) throw err;
    console.table(res);
    runSearch();
  });
}
