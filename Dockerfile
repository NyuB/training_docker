FROM node:22-alpine

ADD package.json .
ADD package-lock.json .
ADD server.js .
RUN npm install
ENTRYPOINT ["npm", "start"]
