# Use an official Node runtime as a parent image.
FROM node:16-alpine

# Set the working directory inside the container.
WORKDIR /app

# Copy dependency definitions.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# By default, run the build command.
CMD ["npm", "run", "build"]
