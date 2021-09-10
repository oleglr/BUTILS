import { expect } from 'chai';
import findDeep from '../findDeep';

describe('findDeep', () => {
    it('find if any values in object meet a predicate, recursively', () => {
        const testObj = {
            a: {
                b: {
                    c: 6,
                    d: 3,
                },
                e: [1, 3, 5],
            },
            f: {
                g: 'halo',
            },
        };

        const predicate1 = o => o === 'halo';
        const predicate2 = o => Array.isArray(o) && o.indexOf(1) === 0;

        const result1 = findDeep(testObj, predicate1);
        const result2 = findDeep(testObj, predicate2);

        expect(result1).to.be.true;
        expect(result2).to.be.true;
    });
});
