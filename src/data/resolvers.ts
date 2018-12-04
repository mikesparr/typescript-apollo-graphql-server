import mocks from "../model/mocks";

// TODO: move to model and call class method(s)
const add = (book: {[key: string]: any}): Array<{[key: string]: any}> => {
    mocks.push(book);
    return mocks;
};

const resolvers: any = {
    Mutation: {
        addBook: (root: any, args: {[key: string]: any}) => add(args.book),
    },
    Query: {
        books: () => mocks,
    },
};

export default resolvers;
