export class FilmModel {
    title: string;
    openingCrawl: string;

    constructor(title?: string, openingCrawl?: string) {
        this.title = title;
        this.openingCrawl = openingCrawl;
    }
}
