import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }

    input BookInput {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }

    type Mutation {
        addBook(book: BookInput): [Book]
    }
`;

export default typeDefs;
