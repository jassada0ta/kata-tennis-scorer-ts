export class TennisScorer {
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
        if (isSameScore) {
            const sameScoreText = p1Score === 40 ? "deuce" : sameScoreLessThan40Text;
            return sameScoreText;
        }
        return diffScoreText;
    }

}