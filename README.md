# GIT configuration

git init --initial-branch=main

git remote add github git@github.com:LazloDEV/docker-mongodb.git

git remote add gitlab git@gitlab.com:LazloDEV/docker-mongodb.git

git remote add bitbucket git@bitbucket.org:lazlo_dev/docker-mongodb.git

git pushall



# Docker

docker build -t dbms-mongodb .

docker run -d --rm -p 27017:27017 --name my-mongodb-1 --network my-bridge-net -e MONGO_INITDB_ROOT_PASSWORD=mypass dbms-mongodb

docker run -d --rm -p 27017:27017 --name my-mongodb-2 --network my-bridge-net mongodb/mongodb-community-server:7.0.1-ubi8

docker run -d --rm -p 27017:27017 --name my-mongodb-3 --network my-bridge-net -e MONGO_INITDB_ROOT_USERNAME=mongo_admin -e MONGO_INITDB_ROOT_PASSWORD=mypass -e MONGO_INITDB_DATABASE=login_db -v C:/DBMS/Docker-MongoDB/volumes/initdb/init.js:/docker-entrypoint-initdb.d/init.js mongodb/mongodb-community-server:7.0.1-ubi8




# DBMS

### 📊 RDBMS vs MongoDB Concepts

| **RDBMS Concept**      | **MongoDB Equivalent**         | **Description** |
|------------------------|-------------------------------|------------------|
| **Database**           | **Database**                  | Logical container for collections/tables. |
| **Table**              | **Collection**                | Group of documents (MongoDB) or rows (RDBMS). |
| **Row (Record)**       | **Document**                  | Single data item — structured as JSON/BSON in MongoDB. |
| **Column**             | **Field**                     | Key in a document, similar to a column in a table. |
| **Primary Key**        | **_id Field**                 | Unique identifier for each record/document. |
| **Index**              | **Index**                     | Used to improve query performance. |
| **Join**               | **Embedded Documents / $lookup** | MongoDB uses embedding or the `$lookup` stage in aggregation to "join" data. |
| **Schema**             | **Schema-less (optional)**    | MongoDB can be schema-less, but schema validation can be added. |
| **Foreign Key**        | **Manual Reference**          | No built-in FK constraints; references are handled in application logic or manually. |
| **SQL (Structured Query Language)** | **MongoDB Query Language (MQL)** | MongoDB uses its own syntax for querying documents. |
| **Transaction**        | **Transaction** (since v4.0)  | MongoDB supports ACID transactions for replica sets and sharded clusters. |
