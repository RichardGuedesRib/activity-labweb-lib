
FROM node:latest

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081

CMD [ "npm", "run", "dev" ]