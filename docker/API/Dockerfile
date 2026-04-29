FROM node:20-alpine

WORKDIR /usr/src/app

# Install dependencies first for better caching
COPY src/API/package*.json ./

RUN npm install

# Copy the rest of the application
COPY src/API/ .

EXPOSE 3000

# Start in development mode with hot-reloading
CMD ["npm", "run", "start:dev"]
