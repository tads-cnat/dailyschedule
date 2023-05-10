FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN npm install --ignore-scripts
COPY ./public
COPY ./src
RUN yarn build


FROM nginx:1.19.0
WORKDIR /usr/shape/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]