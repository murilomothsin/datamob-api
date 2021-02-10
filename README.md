# datamob-api

> Documentação de rotas da fake API para o Datamob

## Users

### POST /users/login

`Login de usuário`

BODY
``` json
{
  "email": "test@test.com",
  "password": "1234"
}
```
RESPONSE
``` json
{
  "type": true,
  "data": {
    "password": "$2a$05$ICuCN75gDb35J/HwbgotBukozgpX6dkycD3xOWTUbkUYqZqSNZ8Pm",
    "_id": "6009f0ce9e4c63c93c9437ae",
    "email": "test@test.com",
    "createdAt": "2021-01-21T21:23:26.293Z",
    "__v": 0,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA5ZjBjZTllNGM2M2M5M2M5NDM3YWUiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE2MTI4Nzk1NTF9.eS05ugrHAt3r0vSFfCax3nV7y1ibIBr4QWpg3_JF3Ug"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA5ZjBjZTllNGM2M2M5M2M5NDM3YWUiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE2MTI4Nzk1NTF9.eS05ugrHAt3r0vSFfCax3nV7y1ibIBr4QWpg3_JF3Ug"
  }
```

### POST /users

`Criação de usuário`

BODY
``` json
{
  "email": "test@test.com",
  "password": "1234"
}
```
RESPONSE
``` json
{
  "password": "$2a$05$7sgPM6eeA91FFUGUVfO3..2dh9mB.B5fcdeWA5QV9wyzW5LYdM.q.",
  "_id": "60229a21d46d6f1a0b7202b1",
  "email": "test@test.com",
  "createdAt": "2021-02-09T14:20:17.161Z",
  "__v": 0
}
```

### GET /users

`Listagem de usuário`

RESPONSE
``` json
[
  {
    "password": "$2a$05$ICuCN75gDb35J/HwbgotBukozgpX6dkycD3xOWTUbkUYqZqSNZ8Pm",
    "_id": "6009f0ce9e4c63c93c9437ae",
    "email": "test@test.com",
    "createdAt": "2021-01-21T21:23:26.293Z",
    "__v": 0,
  }
]
```

## Company

### GET /companies

`Listagem de empresas`

RESPONSE
``` json
[
  {
    "_id": "601b07104cdd3b4f85e645d4",
    "name": "",
    "identification": "",
    "email": "test@test.com",
    "contact": "asdasd",
    "phone": "+5551992561141",
    "zip_code": "95612012",
    "address_line": "Rua Venancio Aires, 2025",
    "city": "Taquara",
    "state": "RS",
    "createdAt": "2021-02-03T20:26:56.400Z",
    "__v": 0
  }
]
```

### POST /companies

`Criação de empresas`

BODY
``` json
{
  "name": "",
  "identification": "",
  "email": "test@test.com",
  "contact": "asdasd",
  "phone": "+5551992561141",
  "zip_code": "95612012",
  "address_line": "Rua Venancio Aires, 2025",
  "city": "Taquara",
  "state": "RS",
}
```

RESPONSE
``` json
[
  {
    "_id": "601b07104cdd3b4f85e645d4",
    "name": "",
    "identification": "",
    "email": "test@test.com",
    "contact": "asdasd",
    "phone": "+5551992561141",
    "zip_code": "95612012",
    "address_line": "Rua Venancio Aires, 2025",
    "city": "Taquara",
    "state": "RS",
    "createdAt": "2021-02-03T20:26:56.400Z",
    "__v": 0
  }
]
```