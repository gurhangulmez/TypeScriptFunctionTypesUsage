//JavaScript Version
function addJS(x,y){
    return x+y
}

//TypeScriptVersion
function addTS(x:number,y:number) : number{
    return x+y
}

//Anonymous method
let addAnonymous = function(x:number, y:number): number {
    return x+y

    //you can use addAnonymous(3,4)
}

//Default parameter usage
function addDefaultParam(x:number,y:number = 8) : number{
    return x+y

    //you can use addDefaultParam(2), so y = 8, sum=10
}

//Optional parameter usage
//optional parameter must be last function parameter.
//so "x?,y" will be a fault, "x,y?" is OK
function addOptionalParam(x:number,y?:number) : number{
    
    //return x+y
    //you cant use return x+y, because y is undefined. You can't add int to undefigned
    //Sum will be Nan (not a number)

    if(y) {
        return x+y
    } else {
        return x
    }

    //if(y) means "is y defined?"
}

//Rest Parameters
function invitePeople(firstGuest:string, ...otherGuests:string[]):string {
    
    return firstGuest + " " + otherGuests.join(" ");
}

console.log(addAnonymous(3,4));
console.log(addJS("Tekirdag", 7));
console.log(addDefaultParam(2));
console.log(addOptionalParam(8));
console.log(addOptionalParam(8, 2));
console.log(invitePeople("Gurhan", "Aysegul", "Fazlı", "Aynur"));

