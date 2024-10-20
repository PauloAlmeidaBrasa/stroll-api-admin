# Use Node 18 as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port that your API will run on (e.g., 4000)
EXPOSE 4000

# Define the environment variable (optional)
# ENV NODE_ENV=production

# Command to start your Node.js app
CMD ["npm","run", "dev"]
