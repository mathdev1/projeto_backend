# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.18.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production

WORKDIR /usr/src/app

# Copy package.json and package-lock.json separately
COPY package*.json ./

# Download dependencies
RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3333

# Install ts-node globally
RUN npm install -g ts-node

# List files to debug
RUN ls -R /usr/src


