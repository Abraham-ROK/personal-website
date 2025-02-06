# Step 1: Use an official Node runtime as a parent image.
FROM node:16-alpine

# Step 2: Set the working directory inside the container.
WORKDIR /app

# Step 3: Copy dependency definitions (package.json and package-lock.json)
COPY package*.json ./

# Step 4: Install dependencies (this includes all packages listed in package.json)
RUN npm install

# Step 5: Copy the rest of the application code into the container.
COPY . .

# Step 6: Run the build command to create the production-ready build.
RUN npm run build

# Step 7: Use a smaller Nginx server to serve the build folder.
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose the Nginx port
EXPOSE 80

# Command to run the Nginx server
CMD ["nginx", "-g", "daemon off;"]
