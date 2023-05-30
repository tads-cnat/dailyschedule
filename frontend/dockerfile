FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN npm install
COPY . .
RUN yarn build

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]

