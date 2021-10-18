const getNumAvg = function(...args) {
    let newArr = [];

    try {
        if(args.length < 2) throw `Must enter two or more values!`; 
        for(let i=0; i<args.length; i++) {
            if(typeof(args[i]) === 'number') newArr.push(args[i]);
            else if(typeof(args[i]) === 'string') {
                if(isNaN(args[i])) throw `${args[i]} is not a valid number!`;
                else newArr.push(parseFloat(args[i]));
            }
            else return `${args[i]} is an invalid value!`;
        }
        return sum(newArr) / newArr.length;
    } catch(e) {
        return e;
    }
}

const sum = function(array) {
    return array.reduce((acc, currval) => {
        return acc + currval
    }, 0)
}

module.exports = {
    getNumAvg,
}