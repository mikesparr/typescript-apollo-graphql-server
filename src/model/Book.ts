export default class Book {
    protected author: string;
    protected title: string;

    constructor(author: string, title: string) {
        if (!author || author === "") {
            throw new TypeError("Missing parameter: author");
        }
        if (!title || title === "") {
            throw new TypeError("Missing parameter: title");
        }

        this.author = author;
        this.title = title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getTitle(): string {
        return this.title;
    }

    public setAuthor(name: string): void {
        if (!name || name === "") {
            throw new TypeError("Author must be a valid String");
        }

        this.author = name;
    }

    public setTitle(name: string): void {
        if (!name || name === "") {
            throw new TypeError("Title must be a valid String");
        }

        this.title = name;
    }

    public toObj(): {[key: string]: any} {
        return {author: this.author, title: this.title};
    }
}
