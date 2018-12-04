import Book from "../Book";

describe("Book", () => {
    let testBook: Book;
    const testAuthor    = "test author";
    const testTitle     = "test title";

    describe("constructor", () => {
        it("instantiates the class", () => {
            testBook = new Book(testAuthor, testTitle);
        });

        it("throws if missing params", () => {
            const result = () => {
                const badBook: Book = new Book(undefined, undefined);
            };
            expect(result).toThrowError(TypeError);
        });
    });

    describe("getTitle", () => {
        it("returns the title of the book", () => {
            const result: string = testBook.getTitle();
            expect(result).toEqual(testTitle);
        });
    });

    describe("getAuthor", () => {
        it("returns the author of the book", () => {
            const result: string = testBook.getAuthor();
            expect(result).toEqual(testAuthor);
        });
    });

    describe("setTitle", () => {
        it("sets the title of the book", () => {
            const newTitle = "new title";
            testBook.setTitle(newTitle);
            const result = testBook.getTitle();
            expect(result).toEqual(newTitle);
        });

        it("throws if invalid input", () => {
            const result = () => {
                testBook.setTitle(undefined);
            };
            expect(result).toThrowError(TypeError);
        });
    });

    describe("setAuthor", () => {
        it("sets the author of the book", () => {
            const newAuthor = "new author";
            testBook.setAuthor(newAuthor);
            const result = testBook.getAuthor();
            expect(result).toEqual(newAuthor);
        });

        it("throws if invalid input", () => {
            const result = () => {
                testBook.setAuthor(undefined);
            };
            expect(result).toThrowError(TypeError);
        });
    });

    describe("toObj", () => {
        it("returns Object representation of book", () => {
            const testObj = {author: "super writer", title: "catchy title"};
            const newTestBook: Book = new Book(testObj.author, testObj.title);
            const result: {[key: string]: any} = newTestBook.toObj();
            expect(result).toEqual(testObj);
        });
    });
});
