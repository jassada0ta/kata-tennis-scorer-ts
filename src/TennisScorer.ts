export class TennisScorer {
    callScore(p1Score: number, p2Score: number): string {
        const scoreMap: any = {
            0: "love",
            15: "fifteen"
        };
        const p1ScoreText = scoreMap[p1Score];
        return `${p1ScoreText}-all`;
    }

}