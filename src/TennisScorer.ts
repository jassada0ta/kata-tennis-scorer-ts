export class TennisScorer {
    callScore(p1Score: number, p2Score: number): string {
        if(p1Score===15){
            return "fifteen-all";
        }
        return "love-all";
    }

}