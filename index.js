function receivesAFunction(mango){
    return mango();
}

function returnsANamedFunction(){
    function taco(){
    }
    return taco;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("anonymous function")
    }

}