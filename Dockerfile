FROM node:16-alpine

RUN npm install -g pnpm

WORKDIR /app
COPY . .
RUN npm ci

RUN npm run build

USER node:node

EXPOSE 6969
CMD ["node", "build/index.js"]