FROM node:20-alpine

WORKDIR /usr/src/app

# Dependencies will be installed once src/frontend is populated
# For now, we provide a basic structure
COPY src/frontend/package*.json ./

RUN if [ -f package.json ]; then npm install; fi

COPY src/frontend/ .

EXPOSE 5173

# Standard Vite dev command
CMD ["npm", "run", "dev", "--", "--host"]
