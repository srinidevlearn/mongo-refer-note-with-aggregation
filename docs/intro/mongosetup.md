---
lang: en-US
title: Mongo Setup
description: How to setup monogdb ?
---

MongoDb setup

> - For learning purpose either we can manually install mongo db in local and separately install mongosh(mongoose shell from below mentioned link).
> - For atlas use [MongoDb Atlas](https://www.mongodb.com/try2).
> - For local installation download from  use [MongoDb Community Server](https://www.mongodb.com/try/download/community2).
> - For Atlas Cli/Mongo Shell use [Mongo Tools - shell](https://www.mongodb.com/try/download/shell2),[Mongo Tools -cli](https://www.mongodb.com/try/download/atlascli2)
> Refer [Connection String URI Format — MongoDB Manual](https://www.mongodb.com/docs/manual/reference/connection-string/#connection-string-options), by this way we can establish connection to mongo db.

```shell
mongodb+srv://<username>:<password>@<atlas_domain_name>/<dbname>?retryWrites=true&w=majority

```

after successful connection you can see

```shell

Current Mongosh Log ID: 63464442c04f4b5eb58c17d0
Connecting to:          mongodb+srv://<credentials>@<atlas_domain_name>/<db>?retryWrites=true&appName=mongosh+1.5.1
Using MongoDB:          5.0.13
Using Mongosh:          1.5.1

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

Atlas atlas-uulano-shard-0 [primary] node-learn>

```
