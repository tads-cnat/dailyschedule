FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
COPY . .

EXPOSE 3000

CMD yarn build; yarn start