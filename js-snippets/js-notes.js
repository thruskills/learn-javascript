// functions
/*

1. In built functions
2. Custom functions of user defined functions

    // definition (declaration)

    function functionName(parameters){
        // this is the body of a function
        ...
        ...

        return value;
    }

    function add(a,b){
        return a+b;
    }

    // evensum : name of function
    // array : parameter

    function evenSum(array){
        var sum = 0;
        if(array != undefined){
            for(i=0;i<array.length;i++){
                if(array[i]%2 == 0){
                    sum = sum + array[i];
                }
            }
        }
        return sum;
    }

    name: evenSum
    parameters: array
    return: sum

    var a = [10,20,30];
    evenSum(a); // invoke the evenSum function
    // evensum : name of function
    // a : argument

    // return - it will always return a single value

    // function call (invoking a function)

    // internal working of a function

    // WAP to generate fibonacci series
*/