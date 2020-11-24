FROM node:12.7.0-alpine
WORKDIR /myapp/
COPY ./client/package.json ./client/
RUN npm install
COPY ./ ./
CMD ["npm", "start", "--prefix", "./client"]