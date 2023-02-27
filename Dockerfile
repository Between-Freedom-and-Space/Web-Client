# pull official base image
FROM node:16

WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install
# Copy app files
COPY . .

RUN npm run env
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]