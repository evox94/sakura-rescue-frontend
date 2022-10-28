import { useCallback, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { fetchUsersScore, trySaveSakura } from "../../lib/JouninClient";
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
        trySaveSakura(newUsername)
        .then(report => {
            setCount(report.saveCount);
            setIsSafe(report.success);
            setMissionReport({
                jounin: report.jounin,
                genin: report.genin,
                success: report.success
            })
        }
        )
        .catch(error => setError("Saving sakura failed!"))
        .finally(() => setLoading(false));
    }

    const saveSakuraHandler = useCallback(saveSakuraHandlerFunc, [username]);

    useEffect(()=>{
        if(username){
            setError(undefined);
            setLoading(true);
            getCountForUserFromServer(username)
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


async function getCountForUserFromServer(username: string): Promise<number>{
    var result = await fetchUsersScore(username);
    return result.value;
}