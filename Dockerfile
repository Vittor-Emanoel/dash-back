FROM node:22

WORKDIR /

COPY ..

RUN yarn start

CMD ["yarn", "start"]