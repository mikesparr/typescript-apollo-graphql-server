# Apollo GraphQL Server (TypeScript)
This repo is just a test to spin up a current version of Apollo Server 2.x and using TypeScript.

# Install
```
npm install
```

# Run
```
npm run build
npm run start-dev
```
* there are 3 errors from Apollo dependency imports in console but build works (still investigating)
* if you want to test changes, open another terminal and run npm run build and `nodemon` will pick up changes in `/dest` compiled JS files

# Query
 * point browser to http://localhost/graphql
 * paste the following in for your first query

 ## Query
 ```
 {
  books {
    author
    title
  }
}
```

## Mutation
```
mutation AddBook{
  addBook(book: {author: "Spike Lee", title: "Do The Right Thing"}) {
    author
    title
  }
}
```

# Test
`npm test` or `npm run coverage`

## References
 * https://www.apollographql.com/docs/apollo-server/getting-started.html
 * https://www.apollographql.com/docs/apollo-server/servers/express.html
 * https://hackernoon.com/extensive-graphql-testing-57e8760f1c25
 * https://medium.com/entria/testing-a-graphql-server-using-jest-4e00d0e4980e

