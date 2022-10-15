---
lang: en-US
title: Collection operation
description: How to setup monogdb ?
features:
- title: Create Database
  details: Why  Mongo Databse & How to use Mongo Database.
---

::: tip
Mongo Database Collection Operation are seen below
:::

[[toc]]

## Create Collection

- To create new collection inside Db

```shell
>  db.createCollection('test5');
```

## List Collections

- To list collections inside the DB
- **db.getCollectionNames()** returns array of string

```shell
>  show collections;
>  db.getCollectionNames();
```

- now **db.** always refers to currently selected DB.

## Rename Collection

- To rename collection

```shell
> db.test5.renameCollection('test15');
or
>  db.getCollection('test5').renameCollection('test15');
```

## Drop Collection

- to drop collection
  
```shell
> db.test5.drop()
> db.getCollection('test5').drop()
```

::: details
::: tip
| db.getCollection | db.<COLLECTION_NAME> |
| ---------------- | :------------------: |
| useful if space mentioned in collection name      |    useful if space were not mentioned in collection name     |

:::
