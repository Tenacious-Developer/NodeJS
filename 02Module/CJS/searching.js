const linearSearch = function search(arr, x) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == x) return i;
    }
    return undefined;
}

const binarySearch = function search(arr, x) {
    let lo = 0, hi = arr.length - 1;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo)/2);
        if(arr[mid] == x) return mid;
        else if(arr[mid] < x) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return undefined;
}

// Module is a mechanism for spiliting program into seprate manageable chunks called as module
// Module is the global which exports the object in key value pair.
// if key and value is the same then write the one name.
// this module global has an object exports


module.exports = {
    linearSearch,
    binarySearch
}