import { TennisScorer } from './TennisScorer';
import{expect} from 'chai';

describe("TennisScorer", () => {
    let scorer: TennisScorer;
    beforeEach(() => {
        scorer = new TennisScorer();
    });
    it("should create new scorer object", () => {
        expect(scorer).to.not.be.undefined;
    });
});