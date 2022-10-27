import { useEffect, useState } from "react";
import { HighScore } from "./types";

export const useHighScores = (shouldFetch: boolean) =>{
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [highScores, setHighScores] = useState<Array<HighScore>>([]);

    useEffect(() => {
        if(shouldFetch){
            console.log("fetching highscores");
            setError(undefined);
            setLoading(true)
            getHighScorers()
            .then(hs => setHighScores(hs))
            .catch(e => setError("Highscore fetching failed!"))
            .finally(() => setLoading(false));
        }
    }, [shouldFetch])

    return {
        isLoading,
        error,
        highScores
    }
}


function getHighScorers(): Promise<Array<HighScore>>{
    return new Promise((resolve, reject) => {
        // setTimeout(() => resolve([{name:"smiki", count:60,}, {name:"Sale", count: 50}]), 2000);
        setTimeout(() => reject("Whoops!"), 2000);
    })
}