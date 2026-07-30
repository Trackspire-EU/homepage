FROM node:24-alpine AS deps
WORKDIR /app
RUN corepack enable
COPY ../package.json pnpm-lock.yaml ./
RUN pnpm config set minimum-release-age 0 --location global && pnpm install --frozen-lockfile --ignore-scripts

FROM node:24-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY .. .
RUN ./node_modules/.bin/next build

FROM nginx:alpine AS runner
COPY --from=builder /app/out /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
