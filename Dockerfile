# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:18 as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.23.2

ENV API_HOST="http://localhost:5000/"

# Copy template file for ENV substitution
COPY --from=build-stage /app/internals/nginx/templates/ /etc/nginx/templates/

COPY --from=build-stage /app/dist/ /usr/share/nginx/html