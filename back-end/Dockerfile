FROM node:latest

WORKDIR /src

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .


COPY .env ./


EXPOSE 8080

CMD [ "yarn", "start:dev" ]
