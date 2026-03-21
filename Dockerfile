# Backend Dockerfile
# Uses a Debian-slim Node image to avoid native optional-dependency issues
FROM node:20-slim

# Create app directory
WORKDIR /app

# Install only production dependencies (use package-lock.json if present for reproducible installs)
COPY package*.json ./
RUN npm ci --only=production

# Copy source
COPY . .

# Expose backend port
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]

# Notes:
# - We install production dependencies so the image is smaller. For development you can use `npm install`.
# - Avoid mounting the host project directory on /app in production because it hides the image's installed node_modules.