const { expect } = require('@jest/globals')
const { getNumAvg } = require('./exercise')

test('should not accept less than 2 values', () => {
    const result1 = getNumAvg(15)
    const result2 = getNumAvg()

    expect(result1).toBe('Must enter two or more values!')
    expect(result2).toBe('Must enter two or more values!')
})

test('should return the average for valid values', () => {
    const result1 = getNumAvg(2, 3)
    const result2 = getNumAvg(-20, -5)
    const result3 = getNumAvg('7', 8)
    const result4 = getNumAvg(9, '62')
    const result5 = getNumAvg('13', '2')
    const result6 = getNumAvg(15, 10, 25)
    const result7 = getNumAvg(1, 7, '48', 52)

    expect(result1).toBe(2.5)
    expect(result2).toBe(-12.5)
    expect(result3).toBe(7.5)
    expect(result4).toBe(35.5)
    expect(result5).toBe(7.5)
    expect(result6).toBe(16.666666666666668)
    expect(result7).toBe(27)
})

test('should not accept invalid values', () => {
    const result1 = getNumAvg('7x890', 99)
    const result2 = getNumAvg('Xyz83', 100)
    const result3 = getNumAvg('92aBc', '44')
    const result4 = getNumAvg('$@#$_^', '23')
    const result5 = getNumAvg('', '')
    const result6 = getNumAvg(null, null)
    const result7 = getNumAvg(undefined, undefined)

    expect(result1).toBe('7x890 is not a valid number!')
    expect(result2).toBe('Xyz83 is not a valid number!')
    expect(result3).toBe('92aBc is not a valid number!')
    expect(result4).toBe('$@#$_^ is not a valid number!')
    expect(result5).toBe(" is not a valid value")
    expect(result6).toBe("null is not a valid value")
    expect(result7).toBe("undefined is not a valid value")
})