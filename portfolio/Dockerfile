# Use a lightweight Node.js 20 image based on Alpine Linux
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Install system dependencies needed for some Node.js packages
RUN apk add --no-cache python3 make g++

# Copy package files first to optimize Docker caching
COPY package*.json ./

# Install Node.js dependencies (use npm ci in production for stricter installs)
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Set correct file ownership to a non-root user for security
RUN chown -R node:node /app

# Switch to the safer non-root user
USER node

# Start the application in development mode
CMD ["npm", "run", "dev"]
