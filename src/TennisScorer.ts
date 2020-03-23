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
        if (p1Score === p2Score) {
            return `${p1ScoreText}-all`;
        }
        return `${p1ScoreText}-${p2ScoreText}`;
    }

}