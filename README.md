# Apollo GraphQL Server (TypeScript)
This repo is just a test to spin up a current version of Apollo Server 2.x and using TypeScript.

# Install
```
npm install
```

# Run
```
npm run build
node dist/app.js
```
* there are 3 errors from Apollo dependency imports in console but build works (still investigating)

# Query
 * point browser to http://localhost/graphql
 * paste the following in for your first query
 ```
 {
  books {
    author
    title
  }
}
```

# Test
Pending

## References
 * https://www.apollographql.com/docs/apollo-server/getting-started.html
 * https://www.apollographql.com/docs/apollo-server/servers/express.html
