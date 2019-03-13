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
# Copy production dependencies aside
# RUN cp -R node_modules /tmp/node_modules

### RELEASE
FROM base AS release
# Copy app sources
COPY . .
# Copy production dependencies
COPY --from=dependencies /tmp/node_modules ./node_modules
# In production environment
# ENV NODE_ENV production
# Expose application port
EXPOSE 7070
# Set command entrypoint
# ENTRYPOINT ["yarn"]
# Run
# CMD ["start:prod"]
