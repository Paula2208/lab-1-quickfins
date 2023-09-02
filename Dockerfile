# Use Node.js image
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install -f

# Bundle app source
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port
EXPOSE 8080

# Start the app
CMD [ "npm", "start" ]
