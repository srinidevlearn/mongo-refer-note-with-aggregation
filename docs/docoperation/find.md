---
lang: en-US
title: Query operation
description: Find/Read operations
pageClass: mongopgpresent
---

## find

- to query all data from collection
- to fetch single document from collection use **findOne()**
  
![An image](./img/mongofindonlyquery.drawio.svg);

```shell
db.test5.find()
```


## projection

![An image](./img/mongoquerywithprojection.drawio.svg)


## cursor
-The Cursor is a MongoDB Collection of the document which is returned upon the find method execution.

- By default, it is automatically executed as a loop. However, we can explicitly get specific index document from being returned cursor. It is just like a pointer which is pointing upon a specific index value.

-In simple words when we call a find method, all the documents which are returned are saved in a virtual cursor. If a find method returns for a document then it is mean that the cursor has 0 – n index.


## sort

![An image](./img/mongoquerywithoutprojection.drawio.svg)


## limit & skip

![An image](./img/mongoquerywithprojection_skip_limit.drawio.svg)

## some mongo query operator

- $and
- $or
- $gt
- $gte
- $lte
- $lt
- $ne
- $nin
- $not
- $inc
- $all
- $elemMatch
- $size
