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

    describe("callScore",()=>{
        let result : string;
        let p1Score : number;
        let p2Score : number;

        const act = ()=>{
            result = scorer.callScore(p1Score,p2Score);
        };

        describe("when score is 0-0",()=>{
            beforeEach(()=>{
                p1Score=0;
                p2Score=0;
            });

            it("should return love-all",()=>{
                act();
                expect(result).to.equal("love-all");
            });
        })
    })
});