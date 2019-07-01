FROM node:lts-slim

COPY . .
RUN npm i 

CMD npm run test