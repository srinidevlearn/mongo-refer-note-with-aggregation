---
lang: en-US
title: $lookup
description: $project in aggregation
pageClass: custom-page-class
previous: './bucket.md'
next: '/todo.md'
toc: false
---

$lookup

- allows you to perform joins on collections in the same database
- works by returning documents from a "joined" collection as a sub-array of the original collection

> - from: the collection we want to join with
> - localField: the field we want to join by in the local collection (the collection we are running the query on)
> - foreignField: the field we want to join by in the foreign collection (the collection we want to join with)
> - as: the name of the output array for the results

::: code-tabs#shell
@tab:active dataForMongoDB

```js
db={
  "employeePayRoll": [
    {
      "band": "A",
      "id": 1.0,
      "ctc": 500000.0,
      "variable": 0.0,
      "pf": 12.0,
      "gratuity": 4.8,
      "hra": 8.0,
      "lta": 15000.0,
      "basic": 50.0
    },
    {
      "band": "C",
      "id": 3.0,
      "ctc": 1500000.0,
      "varaible": 10.0,
      "pf": 12.0,
      "gratuity": 4.8,
      "hra": 24.0,
      "lta": 60000.0,
      "basic": 50.0
    },
    {
      "band": "B",
      "id": 5.0,
      "ctc": 1000000.0,
      "variable": 7.0,
      "pf": 12.0,
      "gratuity": 4.8,
      "hra": 16.0,
      "lta": 30000.0,
      "basic": 50.0
    },
    {
      "band": "B",
      "id": 7.0,
      "ctc": 1000000.0,
      "variable": 7.0,
      "pf": 12.0,
      "gratuity": 4.8,
      "hra": 16.0,
      "lta": 30000.0,
      "basic": 50.0
    },
    {
      "band": "A",
      "id": 4.0,
      "ctc": 500000.0,
      "variable": 0.0,
      "pf": 12.0,
      "gratuity": 4.8,
      "hra": 8.0,
      "lta": 15000.0,
      "basic": 50.0
    },
    {
      "band": "B",
      "id": 2.0,
      "ctc": 1000000.0,
      "variable": 7.0,
      "pf": 12.0,
      "gratuity": 4.8,
      "hra": 16.0,
      "lta": 30000.0,
      "basic": 50.0
    },
    {
      "band": "C",
      "id": 6.0,
      "ctc": 1500000.0,
      "varaible": 10.0,
      "pf": 12.0,
      "gratuity": 4.8,
      "hra": 24.0,
      "lta": 60000.0,
      "basic": 50.0
    },
    {
      "band": "A",
      "id": 8.0,
      "ctc": 500000.0,
      "variable": 0.0,
      "pf": 12.0,
      "gratuity": 4.8,
      "hra": 8.0,
      "lta": 15000.0,
      "basic": 50.0
    },
    {
      "band": "C",
      "id": 9.0,
      "ctc": 1500000.0,
      "varaible": 10.0,
      "pf": 12.0,
      "gratuity": 4.8,
      "hra": 24.0,
      "lta": 60000.0,
      "basic": 50.0
    },
    {
      "band": "B",
      "id": 10.0,
      "ctc": 1000000.0,
      "variable": 7.0,
      "pf": 12.0,
      "gratuity": 4.8,
      "hra": 16.0,
      "lta": 30000.0,
      "basic": 50.0
    }
  ],
  "userInfo": [
    {
      "id": 1.0,
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
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 2.0,
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
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 3.0,
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
      "phone": "1-463-123-4447"
    },
    {
      "id": 5.0,
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
      "phone": "(254)954-1289"
    },
    {
      "id": 6.0,
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
      "phone": "1-477-935-8478 x6430"
    },
    {
      "id": 8.0,
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
      "phone": "586.493.6943 x140"
    },
    {
      "id": 4.0,
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
      "phone": "493-170-9623 x156"
    },
    {
      "id": 9.0,
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
      "phone": "(775)976-6794 x41206"
    },
    {
      "id": 7.0,
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
      "phone": "210.067.6132"
    },
    {
      "id": 10.0,
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
      "phone": "024-648-3804"
    }
  ],
  "userWorkInfo": [
    {
      "id": 2.0,
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      },
      "band": "B"
    },
    {
      "id": 10.0,
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      },
      "band": "B"
    },
    {
      "id": 4.0,
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      },
      "band": "A"
    },
    {
      "id": 6.0,
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      },
      "band": "C"
    },
    {
      "id": 9.0,
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      },
      "band": "C"
    },
    {
      "id": 7.0,
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      },
      "band": "B"
    },
    {
      "id": 3.0,
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      },
      "band": "C"
    },
    {
      "id": 5.0,
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      },
      "band": "B"
    },
    {
      "id": 1.0,
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      },
      "band": "A"
    },
    {
      "id": 8.0,
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      },
      "band": "A"
    }
  ]
}
```
@tab mongoshell

```bash
db.employeePayRoll.aggregate([
  {
    $lookup: {
      from: "userWorkInfo",
      localField: "id",
      foreignField: "id",
      as: "empPay"
    },
    
  },
  {
    $lookup: {
      from: "userInfo",
      localField: "id",
      foreignField: "id",
      as: "empInfo"
    },
    
  },
  {
    $limit: 1
  }
])
```

@tab output

```js
[
  {
    "_id": ObjectId("5a934e000102030405000000"),
    "band": "A",
    "basic": 50,
    "ctc": 500000,
    "empInfo": [
      {
        "_id": ObjectId("5a934e00010203040500000a"),
        "address": {
          "city": "Gwenborough",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          },
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "zipcode": "92998-3874"
        },
        "email": "Sincere@april.biz",
        "id": 1,
        "name": "Leanne Graham",
        "phone": "1-770-736-8031 x56442",
        "username": "Bret"
      }
    ],
    "empPay": [
      {
        "_id": ObjectId("5a934e00010203040500001c"),
        "band": "A",
        "company": {
          "bs": "harness real-time e-markets",
          "catchPhrase": "Multi-layered client-server neural-net",
          "name": "Romaguera-Crona"
        },
        "id": 1,
        "website": "hildegard.org"
      }
    ],
    "gratuity": 4.8,
    "hra": 8,
    "id": 1,
    "lta": 15000,
    "pf": 12,
    "variable": 0
  }
]
```

:::

::: details Try in Mongo Playground

<mongo-playground ihtml="https://mongoplayground.net"/>

:::
