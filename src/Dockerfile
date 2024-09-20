FROM node:12
# FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

# COPY ["./package.json", "./package-lock.json*", "./npm-shrinkwrap.json*", "./"]

# RUN npm install --production --silent && mv node_modules ../

COPY . .

ENV PORT=3400

EXPOSE 3400

RUN chown -R node /usr/src/app

USER node

CMD ["npm", "start"]

