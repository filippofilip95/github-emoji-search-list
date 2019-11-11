export function filterEmoji(data: {}, filterByQuery: string) {
    const emojiArray = Object.entries(data);

    return emojiArray.filter(item => {
        const emojiName = item[0];
        const filterBy = filterByQuery.replace(/:/g, '');

        return emojiName.includes(filterBy)
    });
}

