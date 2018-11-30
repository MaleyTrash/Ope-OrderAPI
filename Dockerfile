FROM node

WORKDIR /api

COPY . /api

RUN npm install

CMD [ "npm", "run", "start:prod" ]

EXPOSE 3000