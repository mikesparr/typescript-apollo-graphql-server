import { graphql } from "graphql";
import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "../schema";
const schema = makeExecutableSchema( { typeDefs } );

describe("Schema", () => {
    describe("Query", () => {
        describe("books()", () => {
            const query = `{
                books {
                  author
                  title
                }
              }`;

            it("parses without error", async (done) => {
                const result = await graphql(schema, query, { }, { });
                expect(result).not.toBeNull();
                expect(result).not.toBeUndefined();
                done();
            });
        });
        // repeat each method
    });

    describe("Mutation", () => {
        describe("addBook(book)", () => {
            const query = `mutation AddBook{
                addBook(book: {author: "Spike Lee", title: "Do The Right Thing"}) {
                  author
                  title
                }
              }`;

            it("parses without error", async (done) => {
                const result = await graphql(schema, query, { }, { });
                expect(result).not.toBeNull();
                expect(result).not.toBeUndefined();
                done();
            });
        });
    });
});
