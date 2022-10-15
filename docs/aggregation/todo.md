---
lang: en-US
title: TODO
description: API Based on Aggregation
pageClass: custom-page-class
previous: './lookup.md'
toc: false
---

- [ ] Insert userInfo to DB
- [ ] Insert employeePayRoll to DB
- [ ] Insert userWorkInfo to DB
- [ ] After inserting separately try to find out payroll calculation using aggregations
- [ ] Joins three tables
- [ ] Check output matched expected output

::: code-tabs#shell
@tab:active userInfo

```js
[
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
  ]
```

@tab userWorkInfo

```js
[
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
```

@tab employeePayRoll

```js
[
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
      "variable": 10.0,
      "pf": 12.0,
      "gratuity": 4.8,
      "hra": 24.0,
      "lta": 30000.0,
      "basic": 40.0
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
      "variable": 10.0,
      "pf": 12.0,
      "gratuity": 4.8,
      "hra": 24.0,
      "lta": 30000.0,
      "basic": 40.0
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
      "variable": 10.0,
      "pf": 12.0,
      "gratuity": 4.8,
      "hra": 24.0,
      "lta": 30000.0,
      "basic": 40.0
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
  ]
```

@tab expected Output

```js
[
  {
    "band": "A",
    "basicAnnualCalc": 250000,
    "ctc": 500000,
    "gratuity": 4.8,
    "gratuityAnnualCalc": 24000,
    "hraAnnualCalc": 40000,
    "id": 1,
    "lta": 15000,
    "otherAnnualCalc": 111000,
    "pfAnnualCalc": 60000,
    "totalAnnualEstimate": 500000,
    "userInfo": {
      "band": "A",
      "company": {
        "bs": "harness real-time e-markets",
        "catchPhrase": "Multi-layered client-server neural-net",
        "name": "Romaguera-Crona"
      },
      "id": 1,
      "website": "hildegard.org"
    },
    "userWorkInfo": {
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
    },
    "variableAnnualCalc": 0
  },
  {
    "band": "C",
    "basicAnnualCalc": 600000,
    "ctc": 1.5e+06,
    "gratuity": 4.8,
    "gratuityAnnualCalc": 72000,
    "hraAnnualCalc": 360000,
    "id": 3,
    "lta": 30000,
    "otherAnnualCalc": 108000,
    "pfAnnualCalc": 180000,
    "totalAnnualEstimate": 1.5e+06,
    "userInfo": {
      "band": "C",
      "company": {
        "bs": "e-enable strategic applications",
        "catchPhrase": "Face to face bifurcated interface",
        "name": "Romaguera-Jacobson"
      },
      "id": 3,
      "website": "ramiro.info"
    },
    "userWorkInfo": {
      "address": {
        "city": "McKenziehaven",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        },
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "zipcode": "59590-4157"
      },
      "email": "Nathan@yesenia.net",
      "id": 3,
      "name": "Clementine Bauch",
      "phone": "1-463-123-4447",
      "username": "Samantha"
    },
    "variableAnnualCalc": 150000
  },
  {
    "band": "B",
    "basicAnnualCalc": 500000,
    "ctc": 1e+06,
    "gratuity": 4.8,
    "gratuityAnnualCalc": 48000,
    "hraAnnualCalc": 160000,
    "id": 5,
    "lta": 30000,
    "otherAnnualCalc": 72000,
    "pfAnnualCalc": 120000,
    "totalAnnualEstimate": 1e+06,
    "userInfo": {
      "band": "B",
      "company": {
        "bs": "revolutionize end-to-end systems",
        "catchPhrase": "User-centric fault-tolerant solution",
        "name": "Keebler LLC"
      },
      "id": 5,
      "website": "demarco.info"
    },
    "userWorkInfo": {
      "address": {
        "city": "Roscoeview",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        },
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "zipcode": "33263"
      },
      "email": "Lucio_Hettinger@annie.ca",
      "id": 5,
      "name": "Chelsey Dietrich",
      "phone": "(254)954-1289",
      "username": "Kamren"
    },
    "variableAnnualCalc": 70000
  },
  {
    "band": "B",
    "basicAnnualCalc": 500000,
    "ctc": 1e+06,
    "gratuity": 4.8,
    "gratuityAnnualCalc": 48000,
    "hraAnnualCalc": 160000,
    "id": 7,
    "lta": 30000,
    "otherAnnualCalc": 72000,
    "pfAnnualCalc": 120000,
    "totalAnnualEstimate": 1e+06,
    "userInfo": {
      "band": "B",
      "company": {
        "bs": "generate enterprise e-tailers",
        "catchPhrase": "Configurable multimedia task-force",
        "name": "Johns Group"
      },
      "id": 7,
      "website": "elvis.io"
    },
    "userWorkInfo": {
      "address": {
        "city": "Howemouth",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        },
        "street": "Rex Trail",
        "suite": "Suite 280",
        "zipcode": "58804-1099"
      },
      "email": "Telly.Hoeger@billy.biz",
      "id": 7,
      "name": "Kurtis Weissnat",
      "phone": "210.067.6132",
      "username": "Elwyn.Skiles"
    },
    "variableAnnualCalc": 70000
  },
  {
    "band": "A",
    "basicAnnualCalc": 250000,
    "ctc": 500000,
    "gratuity": 4.8,
    "gratuityAnnualCalc": 24000,
    "hraAnnualCalc": 40000,
    "id": 4,
    "lta": 15000,
    "otherAnnualCalc": 111000,
    "pfAnnualCalc": 60000,
    "totalAnnualEstimate": 500000,
    "userInfo": {
      "band": "A",
      "company": {
        "bs": "transition cutting-edge web services",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "name": "Robel-Corkery"
      },
      "id": 4,
      "website": "kale.biz"
    },
    "userWorkInfo": {
      "address": {
        "city": "South Elvis",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        },
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "zipcode": "53919-4257"
      },
      "email": "Julianne.OConner@kory.org",
      "id": 4,
      "name": "Patricia Lebsack",
      "phone": "493-170-9623 x156",
      "username": "Karianne"
    },
    "variableAnnualCalc": 0
  },
  {
    "band": "B",
    "basicAnnualCalc": 500000,
    "ctc": 1e+06,
    "gratuity": 4.8,
    "gratuityAnnualCalc": 48000,
    "hraAnnualCalc": 160000,
    "id": 2,
    "lta": 30000,
    "otherAnnualCalc": 72000,
    "pfAnnualCalc": 120000,
    "totalAnnualEstimate": 1e+06,
    "userInfo": {
      "band": "B",
      "company": {
        "bs": "synergize scalable supply-chains",
        "catchPhrase": "Proactive didactic contingency",
        "name": "Deckow-Crist"
      },
      "id": 2,
      "website": "anastasia.net"
    },
    "userWorkInfo": {
      "address": {
        "city": "Wisokyburgh",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        },
        "street": "Victor Plains",
        "suite": "Suite 879",
        "zipcode": "90566-7771"
      },
      "email": "Shanna@melissa.tv",
      "id": 2,
      "name": "Ervin Howell",
      "phone": "010-692-6593 x09125",
      "username": "Antonette"
    },
    "variableAnnualCalc": 70000
  },
  {
    "band": "C",
    "basicAnnualCalc": 600000,
    "ctc": 1.5e+06,
    "gratuity": 4.8,
    "gratuityAnnualCalc": 72000,
    "hraAnnualCalc": 360000,
    "id": 6,
    "lta": 30000,
    "otherAnnualCalc": 108000,
    "pfAnnualCalc": 180000,
    "totalAnnualEstimate": 1.5e+06,
    "userInfo": {
      "band": "C",
      "company": {
        "bs": "e-enable innovative applications",
        "catchPhrase": "Synchronised bottom-line interface",
        "name": "Considine-Lockman"
      },
      "id": 6,
      "website": "ola.org"
    },
    "userWorkInfo": {
      "address": {
        "city": "South Christy",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        },
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "zipcode": "23505-1337"
      },
      "email": "Karley_Dach@jasper.info",
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "phone": "1-477-935-8478 x6430",
      "username": "Leopoldo_Corkery"
    },
    "variableAnnualCalc": 150000
  },
  {
    "band": "A",
    "basicAnnualCalc": 250000,
    "ctc": 500000,
    "gratuity": 4.8,
    "gratuityAnnualCalc": 24000,
    "hraAnnualCalc": 40000,
    "id": 8,
    "lta": 15000,
    "otherAnnualCalc": 111000,
    "pfAnnualCalc": 60000,
    "totalAnnualEstimate": 500000,
    "userInfo": {
      "band": "A",
      "company": {
        "bs": "e-enable extensible e-tailers",
        "catchPhrase": "Implemented secondary concept",
        "name": "Abernathy Group"
      },
      "id": 8,
      "website": "jacynthe.com"
    },
    "userWorkInfo": {
      "address": {
        "city": "Aliyaview",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        },
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "zipcode": "45169"
      },
      "email": "Sherwood@rosamond.me",
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "phone": "586.493.6943 x140",
      "username": "Maxime_Nienow"
    },
    "variableAnnualCalc": 0
  },
  {
    "band": "C",
    "basicAnnualCalc": 600000,
    "ctc": 1.5e+06,
    "gratuity": 4.8,
    "gratuityAnnualCalc": 72000,
    "hraAnnualCalc": 360000,
    "id": 9,
    "lta": 30000,
    "otherAnnualCalc": 108000,
    "pfAnnualCalc": 180000,
    "totalAnnualEstimate": 1.5e+06,
    "userInfo": {
      "band": "C",
      "company": {
        "bs": "aggregate real-time technologies",
        "catchPhrase": "Switchable contextually-based project",
        "name": "Yost and Sons"
      },
      "id": 9,
      "website": "conrad.com"
    },
    "userWorkInfo": {
      "address": {
        "city": "Bartholomebury",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        },
        "street": "Dayna Park",
        "suite": "Suite 449",
        "zipcode": "76495-3109"
      },
      "email": "Chaim_McDermott@dana.io",
      "id": 9,
      "name": "Glenna Reichert",
      "phone": "(775)976-6794 x41206",
      "username": "Delphine"
    },
    "variableAnnualCalc": 150000
  },
  {
    "band": "B",
    "basicAnnualCalc": 500000,
    "ctc": 1e+06,
    "gratuity": 4.8,
    "gratuityAnnualCalc": 48000,
    "hraAnnualCalc": 160000,
    "id": 10,
    "lta": 30000,
    "otherAnnualCalc": 72000,
    "pfAnnualCalc": 120000,
    "totalAnnualEstimate": 1e+06,
    "userInfo": {
      "band": "B",
      "company": {
        "bs": "target end-to-end models",
        "catchPhrase": "Centralized empowering task-force",
        "name": "Hoeger LLC"
      },
      "id": 10,
      "website": "ambrose.net"
    },
    "userWorkInfo": {
      "address": {
        "city": "Lebsackbury",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        },
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "zipcode": "31428-2261"
      },
      "email": "Rey.Padberg@karina.biz",
      "id": 10,
      "name": "Clementina DuBuque",
      "phone": "024-648-3804",
      "username": "Moriah.Stanton"
    },
    "variableAnnualCalc": 70000
  }
]
```

:::

::: details For Cross Verification

::: info

  Query Output of below can be verified at [here](https://mongoplayground.net/p/hCGYQiM1JCO)
  ```shell
  db.employeePayRoll.aggregate([
  {
    $addFields: {
      variableAnnualCalc: {
        $multiply: [
          "$ctc",
          {
            $divide: [
              "c",
              100
            ]
          }
        ]
      },
      gratuityAnnualCalc: {
        $multiply: [
          "$ctc",
          {
            $divide: [
              "$gratuity",
              100
            ]
          }
        ]
      },
      pfAnnualCalc: {
        $multiply: [
          "$ctc",
          {
            $divide: [
              "$pf",
              100
            ]
          }
        ]
      },
      hraAnnualCalc: {
        $multiply: [
          "$ctc",
          {
            $divide: [
              "$hra",
              100
            ]
          }
        ]
      },
      basicAnnualCalc: {
        $multiply: [
          "$ctc",
          {
            $divide: [
              "$basic",
              100
            ]
          }
        ]
      },
      varaiblePayOut: [
        2,
        9
      ]
    }
  },
  {
    $addFields: {
      otherAnnualCalc: {
        $subtract: [
          "$ctc",
          {
            $add: [
              "$variableAnnualCalc",
              "$gratuityAnnualCalc",
              "$hraAnnualCalc",
              "$pfAnnualCalc",
              "$basicAnnualCalc",
              "$lta"
            ]
          }
        ]
      },
      
    }
  },
  {
    $addFields: {
      totalAnnualEstimate: {
        $add: [
          "$variableAnnualCalc",
          "$gratuityAnnualCalc",
          "$hraAnnualCalc",
          "$pfAnnualCalc",
          "$basicAnnualCalc",
          "$lta",
          "$otherAnnualCalc"
        ]
      },
      
    }
  },
  //    {
  //        $addFields: {
  //            othersAnnualCalc: { $subtract: ["$ctc", { $add: ["$basicAnnualCalc", "$hraAnnualCalc", "$lta","$varaibleAnnualCalc",$] }] }
  //        }
  //
  //    },
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
    $set: {
      "userInfo": {
        $arrayElemAt: [
          "$empPay",
          0
        ]
      },
      "userWorkInfo": {
        $arrayElemAt: [
          "$empInfo",
          0
        ]
      }
    }
  },
  {
    $unset: [
      "empInfo",
      "empPay",
      "_id",
      "userWorkInfo._id",
      "userInfo._id",
      "gratutity",
      "hra",
      "pf",
      "varaiblePayOut",
      "basic",
      
    ]
  },
  
])
  ```
:::

:::
