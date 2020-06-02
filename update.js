import handler from './libs/handler-lib';
import dynamoDb from './libs/dynamodb-lib';

export const main = handler(async (evt, ctx) => {
  const data = JSON.parse(evt.body);
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: evt.requestContext.identity.cognitoIdentityId,
      noteId: evt.pathParameters.id
    },
    // Defines the attributes to be updated
    UpdateExpression: "SET content = :content, attachment = :attachment",
    // Defines the value in the update expression
    ExpressionAttributeValues: {
      ":content": data.content || null,
      ":attachment": data.attachment || null
    },
    // Returns the item attributes as they appear after the updateItem operation
    ReturnValuees: "ALL_NEW"
  };

  await dynamoDb.update(params);

  return { status: true };
});