FROM node:v20.9.0-alpine

WORKDIR /src

RUN mkdir -p /src

COPY package.json /src/

RUN yarn cache clean \
  rm node_modules/ \
  yarn install --frozen-lockfile

COPY . .

EXPOSE 8080

CMD [ "yarn", "start:dev" ]