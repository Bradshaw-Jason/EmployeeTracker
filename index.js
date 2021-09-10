

class index {

    menu(){
        console.log("Welcome to the employee list!");
        inquirer
            .prompt([
                {
                type: 'list',
                name: 'navigation',
                message: 'What would you like to do?',
                choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
                },
            ])
            .then(answer => {
                console.log('You have choosen: ', answer.navigation);
                if(answer.navigation=='view all departments'){
                    console.log('answer success')
                }
                else if(answer.navigation=='view all roles'){
                    console.log('answer success')
                }
                else if(answer.navigation=='view all employees'){
                    console.log('answer success')
                }
                else if(answer.navigation=='add a department'){
                    console.log('answer success')
                }
                else if(answer.navigation=='add a role'){
                    console.log('answer success')
                }
                else if(answer.navigation=='add an employee'){
                    console.log('answer success')
                }
                else if(answer.navigation=='update an employee role'){
                    console.log('answer success')
                }
                else{
                    console.log('Something went wrong exiting')
                    this.quit()
                }
            });
    }

    addDepartment(){

    }
    addRole(){

    }
    addEmployee(){

    }
    updateEmployeeRole(){

    }
    
    quit(){
        console.log("\nGoodbye!");
        process.exit(0);
    }

}