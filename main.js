//JavaScript objects that are stored in memory. In order to send a JavaScipt object to Local Storage, we need to serialize it (make it into a string). We do that with JSON.stringify()
let john = {
    lastName: "Wood",
    favoriteColor: "Black",
    homeTown: "White House"
};

let dillon = {
    lastName: "Nevil",
    favoriteColor: "Green",
    homeTown: "White House"
};


//instead of writing this code over and over again, you can make a function 
//to make it dynamic you need to pass it the parameters that will change each time - the name that you want to store it as, and the object you want to store
function setData(jsObject, nameTag){
    //stringify it!
    let stringifiedObject = JSON.stringify(jsObject);
    //send it to local storage
    localStorage.setItem(nameTag, stringifiedObject);
}

setData(john, "John");





//we will do the same thing when loading the data back from local storage. This time we will get the data as a string and we need to make it back into a javascript object by using parse
function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    //we need to get this object out of the function. Return will return it to where we invoked it
    return parsedObject;
}

console.log(loadData("john"));
console.log(loadData("dillon"));