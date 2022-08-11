const { Example } = require('../models');

const resolvers = {
  Query: {
    examples: async () => {
      return Example.find();
    },

    example: async (parent, { exampleId }) => {
      return Example.findOne({ _id: exampleId });
    },
  },

  Mutation: {
    addExample: async (parent, { name }) => {
      return Example.create({ name });
    },
 
    removeExample: async (parent, { exampleId }) => {
      return Example.findOneAndDelete({ _id: exampleId });
    },

  },
};

module.exports = resolvers;
