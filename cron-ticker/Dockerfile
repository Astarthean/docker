### 1º ETAPA - Dependencias de desarrollo ###
FROM node:19.2-alpine3.16 AS dev-deps
WORKDIR /app 
COPY package.json ./
RUN npm install



### 2º ETAPA - Test y build ###
FROM node:19.2-alpine3.16 AS builder
WORKDIR /app 
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test



### 3º ETAPA - Dependencias de producción ###
FROM node:19.2-alpine3.16 AS prod-deps
WORKDIR /app
COPY package.json ./ 
RUN npm install --prod



### 4º ETAPA - Ejecutar la APP ###
FROM node:19.2-alpine3.16 AS runner
WORKDIR /app 
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks
CMD [ "node", "app.js" ]
