FROM node:lts-slim

COPY . .
RUN yarn --frozen-lockfile 

CMD yarn run test