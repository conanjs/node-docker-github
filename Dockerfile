FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "pnpm-lock.yaml*", "./"]
RUN yarn --production 


COPY . .

CMD ["node", "server.js"]