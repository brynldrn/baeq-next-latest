import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('https://ap-northeast-1.cdn.hygraph.com/content/cjqxhy3af88o801dnxok0ru3c/master', {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`
  }
})

export default client;
