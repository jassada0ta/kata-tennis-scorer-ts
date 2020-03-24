export class TennisScorer {

    callScoreByBalls(p1Balls: number, p2Balls: number) {
        const ballsToScoreMap: any = {
            0: 0,
            1: 15,
            2: 30,
            3: 40,
            4: 41
        };
        return this.callScore(
            ballsToScoreMap[p1Balls], 
            ballsToScoreMap[p2Balls]);
    }

    callScore(p1Score: number, p2Score: number): string {
        const scoreMap: any = {
            0: "love",
            15: "fifteen",
            30: "thirty",
            40: "forty"
        };
        const p1ScoreText = scoreMap[p1Score];
        const p2ScoreText = scoreMap[p2Score];
        const diffScoreText = `${p1ScoreText}-${p2ScoreText}`;
        const isSameScore = p1Score === p2Score;
        const sameScoreLessThan40Text = `${p1ScoreText}-all`;
        const sameScoreText = p1Score === 40 ? "deuce" : sameScoreLessThan40Text;
        return p2Score > 40 ? "advantage player2"
            : p1Score > 40 ? "advantage player1"
                : isSameScore ? sameScoreText
                    : diffScoreText;
    }

}