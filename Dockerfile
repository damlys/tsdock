FROM node:16.13-slim AS builder

ARG GITHUB_TOKEN
ARG NPM_TOKEN
ENV NODE_ENV="development"
ENV VERSION="0.0.0"
COPY ./.npmrc ./package.json ./package-lock.json /app/
WORKDIR /app
RUN npm ci \
&& npm cache clean --force

COPY . .
RUN npm run build


FROM node:16.13-slim

ARG GITHUB_TOKEN
ARG NPM_TOKEN
ENV NODE_ENV="production"
ENV VERSION="0.0.0"
COPY ./.npmrc ./package.json ./package-lock.json /app/
WORKDIR /app
RUN npm ci \
&& npm cache clean --force

COPY --from=builder /app/dist ./dist
ENTRYPOINT ["node", "/app/dist/bin/main.js"]
CMD ["help"]

# $ cat /etc/passwd | grep 'node'
# node:x:1000:1000::/home/node:/bin/bash
# $ cat /etc/group | grep 'node'
# node:x:1000:
USER 1000
