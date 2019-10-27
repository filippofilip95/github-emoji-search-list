import {useEffect, useState} from "react";

export function useGithubApi(url: string) {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<{} | null>(null);
    const [data, setData] = useState<{} | null>(null);

    const fetchEmoji = async () => {
        setLoading(true);

        try {
            const response = await fetch(`https://api.github.com${url}`);

            if (response.status === 200) {
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
    }, []);


    return {loading, error, data}
}