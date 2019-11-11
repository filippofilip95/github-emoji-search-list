export function setDocumentTheme(value: string) {
    document.documentElement.setAttribute('data-theme', value);
}

export function saveDocumentTheme(string: string): void {
    window.localStorage.setItem('emoji-list-search-theme', string);
}

export function loadDocumentTheme(): string | null {
    return window.localStorage.getItem('emoji-list-search-theme');
}

export function saveAndSetDocumentTheme(value: string) {
    setDocumentTheme(value);
    saveDocumentTheme(value);
}

export function loadAndSetDocumentTheme(): void {
    const persistedTheme = loadDocumentTheme();

    if (persistedTheme) {
        setDocumentTheme(persistedTheme)
    }
}

