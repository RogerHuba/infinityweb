# Use an official Node.js runtime as a parent image
FROM oven/bun:1 as base

# Set the working directory in the container
WORKDIR /app

# Copy package.json and bun.lockb (or package-lock.json if not using bun exclusively)
COPY package.json bun.lockb* ./
# If you're not using bun.lockb or it might not exist, you might want to copy package-lock.json as well
# COPY package-lock.json ./

# Install dependencies using Bun
RUN bun install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Expose port 3000 for the Next.js app
EXPOSE 3000

# Command to run the Next.js development server
# The --host 0.0.0.0 is important to make the server accessible from outside the container
CMD ["bun", "run", "dev", "--host", "0.0.0.0"]
