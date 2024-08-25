let Todo=[];
let req=prompt("Please enter your  request ");
while(true){
    if(req=="quit"){
        break;
    }
    if(req=="list"){
        console.log("---------------------");
        for(let i=0;i<Todo.length();i++){
            console.log(Todo[i]);
        }
        console.log("---------------------");

    }
    else if(req=="add"){
        let task=prompt("Enter your task which you want to add");
        Todo.push(task);
        console.log("Task added");


    }
    else if(req=="delete"){
        let index=prompt("Enter the index");
        Todo.splice(index,1);
        console.log("Task deleted");


    }
    else{
        console.log("Invalid req!");
    }
    req=prompt("Please enter your  request ");

}