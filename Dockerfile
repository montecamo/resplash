FROM node:14 as build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build:prod

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
