const { buildSchema } = require('graphql');
// Créer un schéma GraphQL
const userSchema = buildSchema(`
type Query {
user(id: Int!): User
users: [User]
}
type Mutation {
addUser(name: String!, email: String!, passwordHash: String!, phone:String!, isAdmin:Boolean!, street:String!, apartment:String!, zip:String!, city:String!, country:String!): User

}
type User {
id: Int
name: String
email: String
passwordHash: String
phone: String
isAdmin: String
street: String
apartment: String
zip: String
city: String
country: String


}
`);
module.exports = userSchema;