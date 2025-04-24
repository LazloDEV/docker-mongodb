
db = db.getSiblingDB('login_db');

db.createUser({
  user: "test_user",
  pwd: "secure123",
  roles: [
    {
      role: "readWrite",
      db: "login_db"
    }
  ]
});

db.createCollection("users", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["username", "password", "names", "last_names", "email"],
        properties: {
          username: { bsonType: "string", description: "must be a string" },
          password: { bsonType: "string", description: "must be a string" },
          names: { bsonType: "string", description: "must be a string" },
          last_names: { bsonType: "string", description: "must be a string" },
          email: { bsonType: "string", description: "must be a string" },
          created_at: {
            bsonType: "date",
            description: "Creation date must be a datetime"
          },          
          last_access_at: {
            bsonType: "date",
            description: "Creation date must be a datetime"
          }
        }
      }
    }
  });

db.users.insertOne({username:"lazlo", password:"testpass", names:"Lazlo", last_names:"Mita", email:"lazlo.mita@gmail.com", created_at: new Date(), last_access_at: new Date()});
db.users.insertOne({username:"gaby", password:"testpass", names:"Gabriela", last_names:"Siles", email:"lazlo.mita@gmail.com", created_at: new Date(), last_access_at: new Date()});
db.users.insertOne({username:"romer", password:"testpass", names:"Romer", last_names:"Garcia", email:"lazlo.mita@gmail.com", created_at: new Date(), last_access_at: new Date()});
db.users.insertOne({username:"chelo", password:"testpass", names:"Marcelo", last_names:"Vargas", email:"lazlo.mita@gmail.com", created_at: new Date(), last_access_at: new Date()});
db.users.insertOne({username:"rigel", password:"testpass", names:"Rigel", last_names:"Vargas", email:"lazlo.mita@gmail.com", created_at: new Date(), last_access_at: new Date()});