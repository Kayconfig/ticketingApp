from node:alpine 
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
cmd ['yarn', 'start']
