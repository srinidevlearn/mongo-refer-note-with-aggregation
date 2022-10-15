---
lang: en-US
title: $set,$unset
description: $project in aggregation
pageClass: mongopgpresent
next: './sort.md'
previous: './addFields.md'
toc: false

---
## $set

- $set appends new fields to existing documents. You can include one or more $set stages in an aggregation operation.
- To add field or fields to embedded documents (including documents in arrays) use the dot notation.

## $unset

- Removes/excludes fields from documents.
- To remove a single field, the $unset takes a string that specifies the field to remove.
- To remove multiple fields, the $unset takes an array of fields to remove.
- To remove/exclude a field or fields within an embedded document, you can use the dot notation.


::: code-tabs#shell
@tab:active dataForMongoDB

```js
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    },
    "ctc": 10,
    "variable": 5,
    "band": "A",
    "skill": [
      "Angular",
      "Mongo",
      "Node",
      "React",
      "vue"
    ],
    "DOJ": "2012-05-05",
    
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    },
    "ctc": 20,
    "variable": 20,
    "band": "B",
    "skill": [
      "PHP",
      "Angular",
      "Mongo",
      "Node",
      "React",
      "vue"
    ],
    "DOJ": "2017-05-05"
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    },
    "ctc": 30,
    "variable": 30,
    "band": "C",
    "skill": [
      "Excel Macros",
      "MS-Powerpoint"
    ],
    "DOJ": "2020-05-05"
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    },
    "ctc": 10,
    "variable": 5,
    "band": "A",
    "skill": [
      "Angular",
      "Mongo",
      "Node",
      "React",
      "vue"
    ],
    "DOJ": "2015-06-05"
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    },
    "ctc": 20,
    "variable": 20,
    "band": "B",
    "skill": [
      "PHP",
      "Angular",
      "Mongo",
      "Node",
      "React",
      "vue"
    ],
    "DOJ": "2015-05-05"
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    },
    "ctc": 30,
    "variable": 30,
    "band": "C",
    "skill": [
      "Excel Macros",
      "MS-Powerpoint"
    ],
    "DOJ": "2015-07-05"
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    },
    "ctc": 20,
    "variable": 20,
    "band": "B",
    "skill": [
      "PHP",
      "Angular",
      "Mongo",
      "Node",
      "React",
      "vue"
    ],
    "DOJ": "2016-11-05"
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    },
    "ctc": 10,
    "variable": 5,
    "band": "A",
    "skill": [
      "Angular",
      "Mongo",
      "Node",
      "React",
      "vue"
    ],
    "DOJ": "2012-11-05"
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    },
    "ctc": 30,
    "variable": 30,
    "band": "C",
    "skill": [
      "Excel Macros",
      "MS-Powerpoint"
    ],
    "DOJ": "2012-05-05"
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    },
    "ctc": 20,
    "variable": 20,
    "band": "B",
    "skill": [
      "PHP",
      "Angular",
      "Mongo",
      "Node",
      "React",
      "vue"
    ],
    "DOJ": "2021-05-05"
  }
]
```

@tab mongoshell

```bash
db.collection.aggregate([
  {
    $set: {
      "DOJ": {
        $dateFromString: {
          dateString: "$DOJ"
        }
      }
    }
  },
  {
    $unset: [
      "username",
      "name",
      "email",
      "address",
      "phone",
      "website",
      "company",
      "ctc",
      "variable",
      "skill",
      
    ]
  }
])
```

@tab output

```bash
[
  {
    "DOJ": ISODate("2012-05-05T00:00:00Z"),
    "_id": ObjectId("5a934e000102030405000000"),
    "band": "A",
    "id": 1
  },
  {
    "DOJ": ISODate("2017-05-05T00:00:00Z"),
    "_id": ObjectId("5a934e000102030405000001"),
    "band": "B",
    "id": 2
  },
  {
    "DOJ": ISODate("2020-05-05T00:00:00Z"),
    "_id": ObjectId("5a934e000102030405000002"),
    "band": "C",
    "id": 3
  },
  {
    "DOJ": ISODate("2015-06-05T00:00:00Z"),
    "_id": ObjectId("5a934e000102030405000003"),
    "band": "A",
    "id": 4
  },
  {
    "DOJ": ISODate("2015-05-05T00:00:00Z"),
    "_id": ObjectId("5a934e000102030405000004"),
    "band": "B",
    "id": 5
  },
  {
    "DOJ": ISODate("2015-07-05T00:00:00Z"),
    "_id": ObjectId("5a934e000102030405000005"),
    "band": "C",
    "id": 6
  },
  {
    "DOJ": ISODate("2016-11-05T00:00:00Z"),
    "_id": ObjectId("5a934e000102030405000006"),
    "band": "B",
    "id": 7
  },
  {
    "DOJ": ISODate("2012-11-05T00:00:00Z"),
    "_id": ObjectId("5a934e000102030405000007"),
    "band": "A",
    "id": 8
  },
  {
    "DOJ": ISODate("2012-05-05T00:00:00Z"),
    "_id": ObjectId("5a934e000102030405000008"),
    "band": "C",
    "id": 9
  },
  {
    "DOJ": ISODate("2021-05-05T00:00:00Z"),
    "_id": ObjectId("5a934e000102030405000009"),
    "band": "B",
    "id": 10
  }
]
```

:::

::: details Try in Mongo Playground

<mongo-playground ihtml="https://mongoplayground.net"/>

:::
