FROM node:lts as base

WORKDIR /app

RUN npm i -g bun

COPY . .

RUN bun i --ignore-scripts

WORKDIR /app/apps/backend

RUN bun run prisma generate

ARG PORT
ARG VITE_APP_BACKEND_URL
ARG DATABASE_URL

WORKDIR /app

RUN bun run build
