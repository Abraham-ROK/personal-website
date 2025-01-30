FROM node:20-alpine

WORKDIR /app

# Copy package files from app directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app code
COPY . .

CMD ["npm", "run", "dev"]