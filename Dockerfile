# Base image
FROM node:14-alpine

# Set working directory
WORKDIR ./

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app files
COPY . .

# Build the app
RUN npm run build

# Set environment variables
ENV PORT=3000

# Expose the port
EXPOSE $PORT

# Start the app
CMD ["npm", "start"]
