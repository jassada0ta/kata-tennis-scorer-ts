import { TennisScorer } from './TennisScorer';
import { expect } from 'chai';

describe("TennisScorer", () => {
    let scorer: TennisScorer;
    beforeEach(() => {
        scorer = new TennisScorer();
    });
    it("should create new scorer object", () => {
        expect(scorer).to.not.be.undefined;
    });

    describe("callScore", () => {
        let result: string;
        let p1Score: number;
        let p2Score: number;

        const act = () => {
            result = scorer.callScore(p1Score, p2Score);
        };

        describe("when score is 0-0", () => {
            beforeEach(() => {
                p1Score = 0;
                p2Score = 0;
            });

            it("should return love-all", () => {
                act();
                expect(result).to.equal("love-all");
            });
        });
        describe("when score is 15-15", () => {
            beforeEach(() => {
                p1Score = 15;
                p2Score = 15;
            });

            it("should return fifteen-all", () => {
                act();
                expect(result).to.equal("fifteen-all");
            });
        });
        describe("when score is 15-0", () => {
            beforeEach(() => {
                p1Score = 15;
                p2Score = 0;
            });

            it("should return fifteen-love", () => {
                act();
                expect(result).to.equal("fifteen-love");
            });
        });
        describe("when score is 30-0", () => {
            beforeEach(() => {
                p1Score = 30;
                p2Score = 0;
            });

            it("should return thirty-love", () => {
                act();
                expect(result).to.equal("thirty-love");
            });
        });
        describe("when score is 40-0", () => {
            beforeEach(() => {
                p1Score = 40;
                p2Score = 0;
            });

            it("should return forty-love", () => {
                act();
                expect(result).to.equal("forty-love");
            });
        });
        describe("when score is 40-40", () => {
            beforeEach(() => {
                p1Score = 40;
                p2Score = 40;
            });

            it("should return deuce", () => {
                act();
                expect(result).to.equal("deuce");
            });
        });
        describe("when score is 41-40", () => {
            beforeEach(() => {
                p1Score = 41;
                p2Score = 40;
            });

            it("should return advantage player1", () => {
                act();
                expect(result).to.equal("advantage player1");
            });
        });
        describe("when score is 40-41", () => {
            beforeEach(() => {
                p1Score = 40;
                p2Score = 41;
            });

            it("should return advantage player2", () => {
                act();
                expect(result).to.equal("advantage player2");
            });
        });
    })
});