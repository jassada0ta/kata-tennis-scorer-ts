import { TennisScorer } from './TennisScorer';
import { expect } from 'chai';

describe("TennisScorer", () => {

    describe("callScore", () => {

        const tests: any[] = [
            [0, 0, "love-all"],
            [15, 15, "fifteen-all"],
            [15, 0, "fifteen-love"],
            [30, 0, "thirty-love"],
            [40, 0, "forty-love"],
            [40, 40, "deuce"],
            [41, 40, "advantage player1"],
            [40, 41, "advantage player2"]
        ];

        tests.forEach(t => {
            const p1Score = t[0];
            const p2Score = t[1];
            const expectedResult = t[2];
            describe(`when score is ${p1Score}-${p2Score}`, () => {
                it(`should return ${expectedResult}`, () => {
                    const scorer = new TennisScorer();
                    const result = scorer.callScore(p1Score, p2Score);
                    expect(result).to.equal(expectedResult);
                });
            });
        });
    });

    describe("callScoreByBalls",()=>{
        const tests: any[] = [
            [0, 0, "love-all"],
            [1, 1, "fifteen-all"],
            [1, 0, "fifteen-love"],
            [2, 0, "thirty-love"],
            [3, 0, "forty-love"],
            [3, 3, "deuce"],
            [4, 3, "advantage player1"],
            [3, 4, "advantage player2"]
        ];

        tests.forEach(t => {
            const p1Balls = t[0];
            const p2Balls = t[1];
            const expectedResult = t[2];
            describe(`when balls numbers are ${p1Balls}-${p2Balls}`, () => {
                it(`should return ${expectedResult}`, () => {
                    const scorer = new TennisScorer();
                    const result = scorer.callScoreByBalls(p1Balls, p2Balls);
                    expect(result).to.equal(expectedResult);
                });
            });
        });
    });
});