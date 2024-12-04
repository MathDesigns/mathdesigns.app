FROM node:23-alpine AS external-website
LABEL Developers="MathDesigns"
WORKDIR /app
COPY . .

RUN npm ci 

RUN npm run build

RUN rm -rf src/ static/ emailTemplates/ docker-compose.yml

USER node:node

CMD ["node","build/index.js"]