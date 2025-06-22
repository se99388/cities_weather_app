# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files to leverage Docker cache for deps installation
COPY package*.json ./

# Install any needed packages
RUN npm ci

# Bundle app source inside the Docker image
COPY . .

# Expose the port on which the app will run (adjust as needed)
EXPOSE 3000

# Build application for production
RUN npm run build

CMD ["npm", "start"]