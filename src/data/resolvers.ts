const books: Array<{[key: string]: any}> = [
    {
        author: "J.K. Rowling",
        title: "Harry Potter and the Chamber of Secrets",
    },
    {
        author: "Michael Crichton",
        title: "Jurassic Park",
    },
];

const resolvers: {[key: string]: any} = {
    Query: {
        books: () => books,
    },
};

export default resolvers;
