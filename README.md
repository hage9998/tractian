# Tractian Challenge

This project aims to create a Rest API that allows performing operations of persistent storage for the entities Assets, Units, Companies, Users.

## Stack Used
- Node
- Typescript
- Express
- MongoDB

## Requirements
- Node > 14

## Installation

```bash
npm install
```

## Execution

```bash
npm run start:dev
```

## About the Development

For the creation of this project I used Architecture Clean that focuses on separating concerns into layers to allow independence, 
testability, and maintainability for each. The idea behind Clean Architecture is that, as software grows and evolves, it is critical to ensure that changes can be made to one component without affecting others. 
This approach also helps keep the focus on the business domain rather than specific technologies or infrastructure.
For this, I separated the code structure into four main folders:

- Domain
- Application
- Infrastructure
- Interfaces

Domain: Contains domain models, schemas and repository interfaces.
Application: contains use cases that represent my application's business logic.
Infrastructure: contains repository implementations and code focused on data persistence.
Interfaces: contains the implementation of user interfaces such as controllers, routes, middleware.

For data persistence, MongoDB was used. I used Mongo Atlas to host my database instance. 
The API was created using Node's Express Framework, which offers several features to facilitate the development of web applications.
The following is an API documentation.

## API ENDPOINTS
<br>
** name ** is a unique value

### Assets endpoint
GET /tractian/asset/id/:assetId

RESPONSE
```json
{
    "_id": "64528c3fdedaf68bda568f22",
    "name": "string",
    "description": "string",
    "model": "string",
    "status": "string",
    "healthLevel": "number",
    "image": "string",
    "owner": {
      "_id": "string",
      "name": "string"
    }
}
```
---
GET /tractian/asset/owner/:ownerId

RESPONSE
```json
{
    "_id": "string",
    "name": "string",
    "description": "string",
    "model": "string",
    "status": "string",
    "healthLevel": "number",
    "image": "string",
    "owner": {
      "_id": "string",
      "name": "string"
    }
}

```
---
GET /tractian/asset/all

RESPONSE
```json
[
    {
        "_id": "string",
        "name": "string",
        "description": "string",
        "model": "string",
        "status": "string",
        "healthLevel": "number",
        "image": "string",
        "owner": {
          "_id": "string",
          "name": "string"
        }      
    }
]
```
---
POST /tractian/asset/

REQUEST
```json
{  
    "asset": {
        "name": "string",
        "description": "string",
        "model": "string",
        "status": "string",
        "healthLevel": "number",
        "image": "string",
        "owner": "string"
    }
}
```
---
PUT /tractian/asset/

REQUEST
```json
{  
    "assetId": "string",
    "asset": {
        "name": "string",
        "description": "string",
        "model": "string",
        "status": "string",
        "healthLevel": "number",
        "image": "string",
        "owner": "string"
    }
}
```
---
DELETE /tractian/asset/:assetId

---

### Units endpoint
GET /tractian/unit/id/:unitId

RESPONSE
```json
{
    "_id": "string",
    "name": "string",
    "description": "string",
    "company": {
      "_id": "string",
      "name": "string"
    }
}
```
---
GET /tractian/unit/company/:companyId

RESPONSE
```json
{
    "_id": "string",
    "name": "string",
    "description": "string",
    "company": {
      "_id": "string",
      "name": "string"
    }
}

```
---
GET /tractian/unit/all

RESPONSE
```json
[
    {
        "_id": "string",
        "name": "string",
        "description": "string",
        "company": {
          "_id": "string",
          "name": "string"
        }
    }
]
```
---
POST /tractian/unit/

REQUEST
```json
{  
    "unit": {
        "name": "string",
        "description": "string",
        "company": "string"
    }
}
```
---
PUT /tractian/unit/

REQUEST
```json
{  
    "unitId": "string",
    "unit": {
        "name": "string",
        "description": "string",
        "company": "string"
    }
}
```
---
DELETE /tractian/unit/:unitId

---

### User endpoint
GET /tractian/user/id/:userId

RESPONSE
```json
{
    "_id": "string",
    "name": "string",
    "age": "number",
    "company": {
      "_id": "string",
      "name": "string"
    }
}
```
---
GET /tractian/user/company/:companyId

RESPONSE
```json
{
    "_id": "string",
    "name": "string",
    "age": "number",
    "company": {
      "_id": "string",
      "name": "string"
    }
}

```
---
GET /tractian/user/all

RESPONSE
```json
[
     {
        "_id": "string",
        "name": "string",
        "age": "number",
        "company": {
          "_id": "string",
          "name": "string"
        }
    }
]
```
---
POST /tractian/user/

REQUEST
```json
{  
    "user": {
        "name": "string",
        "age": "number",
        "company": "string"
    }
}
```
---
PUT /tractian/user/

REQUEST
```json
{  
    "userId": "string",
    "user": {
        "name": "string",
        "age": "number",
        "company": "string"
    }
}
```
---
DELETE /tractian/unit/:unitId

---

### Companies endpoint
GET /tractian/company/id/:companyId

RESPONSE
```json
{
    "_id": "string",
    "name": "string",
    "description": "string",
    "model": "string"
}
```
---
GET /tractian/company/:companyId/units

RESPONSE
```json
{
    "_id": "string",
    "name": "string",
    "description": "string",
    "model": "string",
    "units": [
        {
          "_id": "string",
          "name": "string"
        }
    ]
}

```
---
GET /tractian/company/all

RESPONSE
```json
[
   {
        "_id": "string",
        "name": "string",
        "description": "string",
        "model": "string"
    }
]
```
---
POST /tractian/company/

REQUEST
```json
{  
    "user": {
        "name": "string",
        "age": "number",
        "company": "string",
        "model": "string"
    }
}
```
---
PUT /tractian/company/

REQUEST
```json
{  
    "user": {
        "name": "string",
        "age": "number",
        "company": "string",
        "model": "string"
    }
}
```
---
DELETE /tractian/company/:companyId

---
