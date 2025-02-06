# Stage 1: Build the React app
FROM node:16-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the dependency definitions
COPY package*.json ./

# Set environment to production for optimized build
ENV NODE_ENV=production

# Install dependencies (this step will be cached if package.json or package-lock.json hasn't changed)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app (this generates the production-ready build in the 'build' folder)
RUN npm run build

# Stage 2: Serve the app using a smaller server (Nginx in this case)
FROM nginx:alpine

# Copy the build output from the previous stage to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to make the app accessible
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
