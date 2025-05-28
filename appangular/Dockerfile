FROM node:14 AS build

WORKDIR /app

COPY package.json ./
COPY angular.json ./
COPY src ./src

RUN npm install
RUN npm run build --prod

FROM httpd:2.4

COPY --from=build /app/dist/appangular /usr/local/apache2/htdocs/ 

EXPOSE 80

CMD ["httpd-foreground"]