import mocks from "../../model/mocks";
import resolvers from "../resolvers";

describe("Resolvers", () => {
    describe("Query", () => {
        describe("books", () => {
            it("returns a list of books", () => {
                const result: Array<{[key: string]: any}> = resolvers.Query.books();
                expect(result).toEqual(mocks);
            });
        });
    });

    describe("Mutation", () => {
        describe("addBook(book)", () => {
            it("returns list of books including new one", () => {
                const newBook: {[key: string]: any} = {title: "Fear", author: "Stephen King"};
                const result: Array<{[key: string]: any}> = resolvers.Mutation.addBook(null, {book: newBook});
                expect(result.length).toEqual(3); // added to 2 mock books
                expect(result[2]).toEqual(newBook);
            });
        });
    });
});
