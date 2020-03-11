FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./

RUN yarn install
# If you are building your code for production
# RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 8081
CMD [ "node", "src/server.js" ]