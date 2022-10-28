import { useEffect, useState } from "react";
import { fetchHighScores } from "../../lib/JouninClient";
import { HighScore } from "./types";

export const useHighScores = (shouldFetch: boolean) =>{
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [highScores, setHighScores] = useState<Array<HighScore>>([]);

    useEffect(() => {
        if(shouldFetch){
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

async function getHighScorers(): Promise<Array<HighScore>>{
    var response = await fetchHighScores();
    return response.values;
}