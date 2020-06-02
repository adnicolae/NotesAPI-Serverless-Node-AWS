import handler from './libs/handler-lib';
import dynamoDb from './libs/dynamodb-lib';

export const main = handler(async (evt, ctx) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: evt.requestContext.identity.cognitoIdentityId,
      noteId: evt.pathParameters.id
    }
  };

  await dynamoDb.delete(params);

  return { status: true };
});