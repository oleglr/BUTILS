import { expect } from 'chai';
import barrierFromContract from '../barrierFromContract';

describe('barrierFromContract', () => {
    it('extracts first barrier from contract', () => {
        const contract = { barrier: 100, barrierType: 'absolute' };
        const value = barrierFromContract(contract);
        expect(value).to.equal(100);
    });
});
