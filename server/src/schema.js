const { gql } = require('apollo-server');

const schema = gql`
  type User {
    id: ID!
    email: String!
    createdAt: String!
  }

  type UserAuth {
    user: User
    token: String
    success: Boolean!
  }

  type Bookmark {

  }

  input Paignation {
    offset: Int
    limit: Int
  }

  input CreateBookmarkInput {

  }

  Query {
    bookmarks: [Bookmark]!
    searchBookmarks(query: String!, pagination: Pagination!): [Bookmark]!
  }

  Mutation {
    createBookmark(bookmark: CreateBookmarkInput!): Bookmark!
    userAuth(token: String!): UserAuth!
    createUser(user: CreateUserInput!): User!
  }
`;

module.exports = schema;
