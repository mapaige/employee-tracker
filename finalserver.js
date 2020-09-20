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

// Connect to mySql server and database

connection.connect(function (err) {
	if (err) throw err;
	console.log('connected as id  ' + connection.threadId);
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
		.then(function(res) {
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
					console.table('default');
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

// Add function

function add(){
	inquirer
		.prompt([
			{
				type: 'list',
				name: 'add',
				message: 'What would you like to add?',
				choices: ['Employee', 'Department', 'Role']
			},
		])
		.then((answer) => {
			switch (answer.add) {
				
				case 'Department':
					addDepartment();
					break;
					case 'Employee':
					addEmployee();
					break;
				case 'Role':
					addRole();
					break;
				default:
					console.log('default');
			}
		});
}

function addDepartment(){
	inquirer
		.prompt([
			{
				name:'department',
				type: 'add',
				message: 'What would you like the department title to be?'
			}
		]).then(function(res) {
			connection.query(
				'INSERT into department(section)VALUES(?)',
				res.department,
				function (err) {
					console.table('Department added');
					runSearch();
				}
			);
		});
}

function addEmployee(){
	inquirer
		.prompt([
			{
				name:'first_name',
				type: 'input',
				message: 'Please add first name?'
			},
			{
				name:'last_name',
				type: 'input',
				message: 'Please add last name?'
			},
			{
				name:'role_id',
				type: 'input',
				message: 'Please add Role id?'
			},
			{
				name:'manager_id',
				type: 'input',
				message: 'Please add Manager id?'
			}
		]).then(function(res) {
			connection.query(
				'INSERT into employee(first_name,last_name,role_id,manager_id)VALUES(?,?,?,?)',
				[res.first_name,res.last_name,res.role_id,res.manager_id],
				function (err) {
					console.table('Employee added');
					runSearch();
				}
			);
		});
}

function addRole(){
	inquirer
		.prompt([
			{
				name: 'title',
				type: 'input',
				message: "Enter role title:"
			},
			{
				name:'salary',
				type: 'number',
				message:'Enter salary:',
				
			},
			{
				name: 'department_id',
				type:	'number',
				message:'Enter department id',
			},
			
		]).then(function(answer){
			connection.query(
				"INSERT INTO role SET ?",
				{
					title:answer.title,
					salary: answer.salary,
					department_id: answer.department_id
				},
				function(err){
				 console.log("Role added")
				 runSearch();
				}
			)
		})
	
}

// Update function
function updateEmployee() {
	inquirer.prompt([{
		type:"input",
		message:"What is the employee' id?",
		name:"employeeId"

	},
	{
		type:"input",
		message:"What is the  new role id?",
		name:"roleId"

	}]).then(function(answer){
		connection.query("update employee SET role_id = ? WHERE id = ?",[answer.roleId, answer.employeeId],function(err){
			console.log("Employee role updated")
			runSearch();
		})
	})
 
}
		
		
// }