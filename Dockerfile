FROM node:12-alpine as build

WORKDIR /src/

COPY package.json package-lock.json /src/

RUN  npm ci --silent

COPY . .

FROM node:12-alpine as dev

WORKDIR /src/

COPY --from=build /src/node_modules node_modules

USER node

CMD npm run debug:livereload