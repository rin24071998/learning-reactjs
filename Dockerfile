FROM node:16
WORKDIR /usr/src/app
COPY . .
RUN yarn
EXPOSE 3000
CMD ["yarn", "start"]

