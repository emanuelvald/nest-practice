 FROM node:alpine
 WORKDIR /main
 COPY package.json .
 RUN npm install --only=prod
 COPY . .
 CMD ["npm", "run", "start:dev"]