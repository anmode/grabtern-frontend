FROM node:14-alpine

WORKDIR /grabtern-frontend

COPY ./package*.json /grabtern-frontend

RUN npm install

COPY . /grabtern-frontend

CMD ["npm","start"]