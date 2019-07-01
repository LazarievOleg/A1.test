FROM node:lts-slim

RUN apt-get update -qq && \
  apt-get install -y \
  build-essential \
  g++ \
  python \
  -qq

COPY . .
RUN yarn --frozen-lockfile 

CMD yarn run test