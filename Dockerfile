# pull official base image
FROM node:18

# speed up npm install a little on docker
RUN npm config set registry http://registry.npmjs.org/

RUN npm install webpack -g
RUN npm install webpack-cli -g

WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install
# Copy app files
COPY . .

RUN npm run env
RUN webpack

ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]