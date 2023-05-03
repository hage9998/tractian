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

### Assets endpoint
GET /tractian/asset/id/:assetId

RESPONSE
```json
{
    "_id": "64528c3fdedaf68bda568f22",
    "name": "TestTractian",
    "description": "Test",
    "model": "ModelTest",
    "status": "Running",
    "image": "laal.com",
    "owner": {
      "_id": "64526aa3a5d520ba05036c40",
      "name": "TestTractianUnit",
    }
}
```
---
GET /tractian/asset/owner/:ownerId

RESPONSE
```json
{
    "_id": "64528c3fdedaf68bda568f22",
    "name": "TestTractian",
    "description": "Test",
    "model": "ModelTest",
    "status": "Running",
    "image": "laal.com",
    "owner": {
      "_id": "64526aa3a5d520ba05036c40",
      "name": "TestTractianUnit",
    }
}

```
---
GET /tractian/asset/all

RESPONSE
```json
[
    {
        "_id": "64528c3fdedaf68bda568f22",
        "name": "TestTractian",
        "description": "Test",
        "model": "ModelTest",
        "status": "Running",
        "image": "laal.com",
        "owner": {
          "_id": "64526aa3a5d520ba05036c40",
          "name": "TestTractianUnit",
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
        "name": "TestTractian",
        "description": "Test",
        "model": "ModelTest",
        "status": "Running",
        "image": "laal.com",
        "owner": "64526aa3a5d520ba05036c40"
    }
}
```
---
PUT /tractian/asset/

REQUEST
```json
{  
    "assetId": "64528c3fdedaf68bda568f22",
    "asset": {
        "name": "TestTractian",
        "description": "Test",
        "model": "ModelTest",
        "status": "Running",
        "image": "laal.com",
        "owner": "64526aa3a5d520ba05036c40"
    }
}
```
---
DELETE /tractian/asset/:assetId

---

