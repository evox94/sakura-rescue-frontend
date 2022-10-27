import { useCallback, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { MissionReport } from "./types";

export const useSakuraRescue = () =>{
    const [username, setUsername] = useLocalStorage<string>('username', '');
    const [count, setCount] = useState(0);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [isSafe, setIsSafe] = useState(true);
    const [missionReport, setMissionReport] = useState<MissionReport | undefined>(undefined);

    const saveSakuraHandlerFunc = (newUsername: string) => {
        if (newUsername != username) {
            setUsername(newUsername);
        }
        setError(undefined);
        setMissionReport(undefined);
        setLoading(true);
        getCountForUserFromServer(username, count)
        .then(c => {
            setCount(c);
            setIsSafe(true);
            setMissionReport({
                jounin: "jounin-test",
                genins: ["genin1", "genin2"]
            })
        }
        )
        .catch(error => setError("Saving sakura failed!"))
        .finally(() => setLoading(false));
    }

    const saveSakuraHandler = useCallback(saveSakuraHandlerFunc, [username, count]);

    useEffect(()=>{
        if(username){
            setError(undefined);
            setLoading(true);
            getCountForUserFromServer(username, count)
            .then(c => setCount(c))
            .catch(error => setError("Something went wrong!"))
            .finally(() => setLoading(false));
        }
    },[]);

    useEffect(() => {
        if(isSafe){
            var waiting = Math.floor(Math.random() * 5000) + 5000; 
            setTimeout(() => setIsSafe(false), waiting);
        }
    }, [isSafe])

    return {
        username,
        count,
        isLoading,
        error,
        saveSakuraHandler,
        isSafe,
        missionReport,
        clearMissionReport: () => setMissionReport(undefined)
    }
}


function getCountForUserFromServer(username: string, num: number): Promise<number>{
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num+1), 1000);
    })
}