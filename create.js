import * as uuid from "uuid";
import AWS from 'aws-sdk';

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export function main(event, context, callback) {
  // Parse request body from the event body
  const data = JSON.parse(event.body);

  // Attributes of the Item to be created
  // userId is the identity id federated through the Cognito Identity Pool
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createAt: Date.now()
    }
  };
  console.log(params);

  dynamoDB.put(params, (error, data) => {
    // Enable CORS
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    };

    if (error) {
      const response = {
        statusCode: 500,
        headers: headers,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
      return;
    }

    const response = {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify(params.Item)
    };

    callback(null, response);
  });
}