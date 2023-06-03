FROM node:18 as build

COPY package*.json .
RUN yarn
COPY . .
RUN yarn build

FROM node:18
ENV NODE_ENV=production
COPY --from=build ./dist .
COPY --from=build package*.json .
RUN yarn --production

EXPOSE 4000
CMD ["node", "./server.js"]