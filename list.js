import handler from './libs/handler-lib';
import dynamoDb from './libs/dynamodb-lib';

export const main = handler(async (evt, ctx) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    // Defines the query condition, return items with matching userId partition key
    KeyConditionExpression: "userId = :userId",
    // Defines the value in the condition
    ExpressionAttributeValues: {
      ":userId": evt.requestContext.identity.cognitoIdentityId
    }
  };

  const result = await dynamoDb.query(params);

  return result.Items;
});