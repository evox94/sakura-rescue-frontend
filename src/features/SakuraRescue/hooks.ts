import { useCallback, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export const useSakuraRescue = () =>{
    const [username, setUsername] = useLocalStorage<string>('username', '');
    const [count, setCount] = useState(0);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [isSafe, setIsSafe] = useState(true);

    const saveSakuraHandlerFunc = (newUsername: string) => {
        if (newUsername != username) {
            setUsername(newUsername);
        }
        setError(undefined);
        setLoading(true);
        getCountForUserFromServer(username, count)
        .then(c => {
            setCount(c);
            setIsSafe(true);
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
        isSafe
    }
}


function getCountForUserFromServer(username: string, num: number): Promise<number>{
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num+1), 1000);
    })
}