FROM node:16-alpine

RUN npm install -g pnpm

WORKDIR /app
COPY . .
RUN npm ci
RUN npm audit fix
RUN npm run build

RUN rm -rf src/ static/ emailTemplates/ docker-compose.yml

EXPOSE 6969
CMD ["node", "build/index.js"]