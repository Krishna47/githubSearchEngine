export const typeDefs = `
directive @cacheControl(maxAge: Int, scope: CacheControlScope) on FIELD_DEFINITION | OBJECT | INTERFACE
enum CacheControlScope {
  PUBLIC
  PRIVATE
}


type Query {
  user(login: String!): Repos
}

type Repos{
nodes : NodeList
totalCount: Int!
}

type NodeList {
      createdAt:String!
        description: String!
        name:String!
        url:String!
        viewerPermission:String!
        id:String!
}


`