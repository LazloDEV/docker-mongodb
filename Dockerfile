# Use the official Postgres image as the base
FROM mongodb/mongodb-community-server:7.0.1-ubi8

# Set environment variables (optional, helpful)
ENV MONGO_INITDB_ROOT_USERNAME=mongo_admin
ENV MONGO_INITDB_DATABASE=login_db

# Copy custom initialization scripts
COPY ./volumes/initdb/init.js /docker-entrypoint-initdb.d/init.js

# Optionally expose the port (Postgres default)
EXPOSE 27017
