### BASE
FROM node:dubnium-alpine AS base
LABEL maintainer "Qasim Soomro <qasim@soomro.com>"
# Set the working directory
WORKDIR /app
# Copy project specification and dependencies lock files
COPY package.json yarn.lock tsconfig.json /tmp/
# Install yarn
RUN apk --no-cache add yarn

### DEPENDENCIES
FROM base AS dependencies
# Install Node.js dependencies
RUN cd /tmp && yarn --pure-lockfile

### RELEASE
FROM base AS development
# Copy app sources
COPY . .
# Copy dependencies
COPY --from=dependencies /tmp/node_modules ./node_modules
# Expose application port
EXPOSE 7070
