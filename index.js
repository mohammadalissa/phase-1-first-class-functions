function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    const wasfi=()=> console.log('anything')
    return wasfi;
}
function returnsAnAnonymousFunction(){
    return (function(){console.log('sda')})
}