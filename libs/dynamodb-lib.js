import AWS from 'aws-sdk';

const client = new AWS.DynamoDB.DocumentClient();

export default {
  get: params => client.get(params).promise(),
  put: params => client.put(params).promise(),
  query: params => client.put(params).promise(),
  update: params => client.put(params).promise(),
  delete: params => client.put(params).promise(),
};