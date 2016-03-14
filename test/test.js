const chai = require('chai');
const expect = chai.expect;

const numbersMap = {
    'I': 1,
    'V': 5,
    'X': 10
};

const romanConverter = (str) => {

    if (str.length === 2) {
        const first = numbersMap[str[0]];
        const second = numbersMap[str[1]];

        if (first < second) {
            return second - first;
        }

        return first + second;
    }

    if (str.length > 2) {
        return romanConverter(str[0]) + romanConverter(str.slice(1));
    }

    return numbersMap[str];
};

describe('Roman numbers converter', () => {
    [
        {
            input: 'I',
            expectedValue: 1
        },
        {
            input: 'II',
            expectedValue: 2
        },
        {
            input: 'III',
            expectedValue: 3
        },
        {
            input: 'IV',
            expectedValue: 4
        },
        {
            input: 'V',
            expectedValue: 5
        },
        {
            input: 'VI',
            expectedValue: 6
        },
        {
            input: 'VII',
            expectedValue: 7
        },
        {
            input: 'VIII',
            expectedValue: 8
        },
        {
            input: 'IX',
            expectedValue: 9
        },
        {
            input: 'X',
            expectedValue: 10
        }
    ].forEach((testCase) => {
        it(`should return ${testCase.expectedValue} when input is "${testCase.input}"`, () =>
          expect(romanConverter(testCase.input)).to.equal(testCase.expectedValue)
        );
    });
});
