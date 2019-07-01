FROM node:lts-slim

RUN apt-get update -qq && \
  apt-get install -y \
  build-essential \
  g++ \
  python \
  -qq

COPY . .
RUN yarn global add fibers
RUN yarn global add node-gyp
RUN yarn --frozen-lockfile 

CMD yarn run lint
# use lint instead tests, mate