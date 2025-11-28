# Development stage
FROM node:20-alpine AS development

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY apps/client/package*.json ./apps/client/
COPY turbo.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

WORKDIR /app/apps/client

# Expose port
EXPOSE 3000

# Start in development mode
CMD ["npm", "run", "dev"]

# Dependencies stage
FROM node:20-alpine AS dependencies

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY apps/client/package*.json ./apps/client/
COPY turbo.json ./

# Install dependencies
RUN npm ci

# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependencies
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/apps/client/node_modules ./apps/client/node_modules

# Copy source code
COPY . .

# Build application
WORKDIR /app/apps/client
RUN npm run build

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

# Copy package files
COPY apps/client/package*.json ./

# Install production dependencies only
RUN npm ci --only=production && npm cache clean --force

# Copy built application
COPY --from=build /app/apps/client/.next ./.next
COPY --from=build /app/apps/client/public ./public
COPY --from=build /app/apps/client/next.config.js ./next.config.js
COPY --from=build /app/apps/client/package.json ./package.json

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

USER nextjs

# Expose port
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start application
CMD ["npm", "start"]

