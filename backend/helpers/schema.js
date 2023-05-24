const { GraphQLObjectType, GraphQLInputObjectType,GraphQLID, GraphQLString, GraphQLSchema, GraphQLList, graphql, GraphQLNonNull, GraphQLInt, GraphQLBoolean } = require('graphql');
const Orderz=new GraphQLObjectType({
  name: "orderz",
  fields: {
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    product: { type: GraphQLString }
  }
});
const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getOrder: {
      type: Orderz,
      resolve() {
        // Resolve logic for fetching an order
      },
    },
  },
});
const {Order}=require('../models/order');
const Rootmutation = new GraphQLObjectType({
    name: "mutation",
    description: "Add an order",
    fields: {
      addorder: {
        type: Orderz, // Assuming ClubType is defined somewhere else
        args: {
         username: { type:GraphQLString  },
         product: { type:GraphQLString  }
        },
        resolve(parent, args) {
            return new Promise(async(resolve, reject) => {
              const order = new Order({ username: args.username, product: args.product });
              try {
                const savedOrder = await order.save();
                console.log(savedOrder);
                resolve(savedOrder);
              } catch (err) {
                console.error(err);
                reject(err);
              }
              });
            }}}})
      module.exports = new GraphQLSchema({
              mutation: Rootmutation,
              query:Query
          })
          

