import {useEffect, useState} from "react";
import {getResponseCache, setResponseCache} from "./EmojiList.utils";

export function useGithubApi(url: string) {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<{} | null>(null);
    const [data, setData] = useState<{} | null>(null);
    const urlToFetch = `https://api.github.com${url}`;

    const fetchEmoji = async () => {
        setLoading(true);

        try {
            let response = await getResponseCache(urlToFetch);

            if (!response) {
                response = await fetch(urlToFetch);
            }

            if (response.status === 200) {
                setResponseCache(urlToFetch, response.clone());
                const emoji = await response.json();
                setData(emoji);
            } else {
                throw new Error(response.statusText);
            }

        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }

        setLoading(false)
    };

    useEffect(() => {
        fetchEmoji();
    }, [urlToFetch]);


    return {loading, error, data}
}