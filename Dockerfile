FROM node:latest as build

WORKDIR /app

COPY . .

RUN npm i
RUN npm run build:prod

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
