FROM node:17-alpine AS builder

RUN addgroup -S nonroot \
    && adduser -S nonroot -G nonroot

USER nonroot

ENTRYPOINT ["id"]
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