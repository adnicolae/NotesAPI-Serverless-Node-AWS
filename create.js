import * as uuid from "uuid";
import handler from './libs/handler-lib';
import dynamoDb from './libs/dynamodb-lib';

export const main = handler(async (evt, ctx) => {
  // Parse request body from the event body
  const data = JSON.parse(evt.body);

  // Attributes of the Item to be created
  // userId is the identity id federated through the Cognito Identity Pool
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      userId: evt.requestContext.identity.cognitoIdentityId,
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createAt: Date.now()
    }
  };

  await dynamoDb.put(params);

  return params.Item;
});