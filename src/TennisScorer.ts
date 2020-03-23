export class TennisScorer {
    callScore(p1Score: number, p2Score: number): string {
        const scoreMap :any = {
            0:"love",
            15:"fifteen"
        };
        return scoreMap[p1Score]+"-all";
    }

}