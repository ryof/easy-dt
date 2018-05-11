FROM node:9-alpine

RUN mkdir /app
WORKDIR /app
COPY views views
COPY index.js index.js
COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

EXPOSE 33000

CMD ["node", "index.js"]
