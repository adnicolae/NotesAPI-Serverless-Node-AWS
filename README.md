# Serverless Node.js API (Notes)

Practice API developed using Serverless Framework with NodeJs and deployed on AWS.
Related React frontend client: https://github.com/adnicolae/sls-notes-app-client

### Usage

To run a function on your local

``` bash
$ serverless invoke local --function hello
```

To simulate API Gateway locally using [serverless-offline](https://github.com/dherault/serverless-offline)

``` bash
$ serverless offline start
```

Deploy your project

``` bash
$ serverless deploy
```

Deploy a single function

``` bash
$ serverless deploy function --function hello
```
