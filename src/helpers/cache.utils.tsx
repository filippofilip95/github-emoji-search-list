const cacheName = 'github-emoji-list-web-cache';

export async function setResponseCache(url: RequestInfo, res: Response) {
    if ('caches' in window) {
        try {
            const cache = await caches.open(cacheName);

            if (cache) {
                const hasCachedResponse = !!await cache.match(url);

                if (hasCachedResponse) {
                    return;
                }

                await cache.put(url, res);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export async function getResponseCache(url: RequestInfo): Promise<Response | null> {
    if ('caches' in window) {
        try {
            const cache = await caches.open(cacheName);

            if (cache) {
                const cachedResponse = await cache.match(url);

                if (cachedResponse) {
                    return cachedResponse;
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    return null
}