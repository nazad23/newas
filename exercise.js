/* Requirements:
 * 1. can only accept 2 or more arguments 
 * 2. arguments can be of type number and string (string representation of numbers)
 * 3. throw error if argument is NOT a number 
 * 4. throw error if argument cannot be converted to a number
 * 5. return average
*/

const getNumAvg = function() {
    let args = [...arguments];
    let newArr = [];

    try {
        if(args.length < 2) throw `Must enter two or more values!`; 
        for(let i=0; i<args.length; i++) {
            if(typeof(args[i]) === 'number') newArr.push(args[i]);
            else if(typeof(args[i]) === 'string' && [...args[i]].length > 0) {
                if(isStringNumeric(args[i])) newArr.push(parseInt(args[i]));
                else throw `${args[i]} is not a valid number!`;
            }
            else return `${args[i]} is not a valid value`;
        }
        return sum(newArr) / args.length;
    }catch(e) {
        return e;
    }
}

const sum = (arr) => arr.reduce((acc, currval) => acc + currval, 0);

const isStringNumeric = str => [...str].every(num => '0123456789'.includes(num));

module.exports = {
    getNumAvg,
}