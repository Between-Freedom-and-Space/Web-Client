# pull official base image
FROM node:14

WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .

RUN npm run env
RUN npm install
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]