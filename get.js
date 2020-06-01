import handler from './libs/handler-lib';
import dynamoDb from './libs/dynamodb-lib';

export const main = handler(async (evt, ctx) => {
  // Key defines the partition and sort keys of the item to be retrieved
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: evt.requestContext.identity.cognitoIdentityId,
      noteId: evt.pathParameters.id
    }
  };

  const result = await dynamoDb.get(params);

  if (!result.Item) {
    throw new Error("Item could not be found.");
  }

  return result.Item;
});