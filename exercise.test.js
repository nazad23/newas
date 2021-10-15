const { expect } = require('@jest/globals')
const { getNumAvg } = require('./exercise')

test('should not accept less than 2 values', () => {
    const result1 = getNumAvg(15)
    const result2 = getNumAvg()

    expect(result1).toBe('Must enter two or more values!')
    expect(result2).toBe('Must enter two or more values!')
})

test('should return average for valid numeric args', () => {
    const result1 = getNumAvg(2, 3)
    const result2 = getNumAvg(-20, -5)

    expect(result1).toEqual(2.5)
    expect(result2).toEqual(-12.5)
})

test('should return average for valid string args', () => {
    const result1 = getNumAvg('13', '2')
    const result2 = getNumAvg('1024', '258')

    expect(result1).toEqual(7.5)
    expect(result2).toEqual(641)
})

test('should return average for valid numeric and string args', () => {
    const result1 = getNumAvg('7', 8)
    const result2 = getNumAvg(9, '62')
    const result3 = getNumAvg(1, 7, '48', 52)

    expect(result1).toBe(7.5)
    expect(result2).toBe(35.5)
    expect(result3).toBe(27)
})

test('should not accept invalid strings', () => {
    const result1 = getNumAvg('7x890', 99)
    const result2 = getNumAvg('Xyz83', 100)
    const result3 = getNumAvg('92aBc', '44')
    const result4 = getNumAvg('$@#$_^', '23')

    expect(result1).toBe('7x890 is not a valid number!')
    expect(result2).toBe('Xyz83 is not a valid number!')
    expect(result3).toBe('92aBc is not a valid number!')
    expect(result4).toBe('$@#$_^ is not a valid number!')
})

test('should throw error if arg data type is not a number or string', () => {
    const result1 = getNumAvg(null, null)
    const result2 = getNumAvg(undefined, undefined)
    const result3 = getNumAvg([12, 24, '36', '48'], ['5', '10', 15, 20])
    const result4 = getNumAvg({"a":1, "b": 2}, {"c":'77', "d":'88'})
    const result5 = getNumAvg(true, true)
    const result6 = getNumAvg(false, false)

    expect(result1).toBe('null is an invalid value!')
    expect(result2).toBe('undefined is an invalid value!')
    expect(result3).toBe('12,24,36,48 is an invalid value!')
    expect(result4).toBe('[object Object] is an invalid value!')
    expect(result5).toBe('true is an invalid value!')
    expect(result6).toBe('false is an invalid value!')
})