
exports.min = function min (array) {
    let min = Infinity;

    if(array==undefined || array.length==0){
        return 0;
    }
    
    for(let i=0; i<array.length; i++) {
        if(array[i]<min) {
            min=array[i];
        }
    }
    return min;
}

exports.max = function max (array) {
    let max = -Infinity;
    
    if(array==undefined || array.length==0){
        return 0;
    }
    
    for(let i=0; i<array.length; i++) {
        if(array[i]>max) {
            max=array[i];
        }
    }
    return max;
}

exports.avg = function avg (array) {
    let avg = 0;

    if(array==undefined || array.length==0){
        return 0;
    }
    for(let i=0; i<array.length; i++) {
        avg += array[i];
    }
    return avg = avg/array.length;
}
