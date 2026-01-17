FROM node:22-alpine AS build
# single command build:
# - mount the build context into /app, allowing temporary writes
# - clean install packages (remove inherited node_modules, use package-lock.json)
# - build app
# - copy result out of the bind mount, into the image
RUN --mount=type=bind,dst=/app,rw cd /app && npm ci && npm run build && cp -r /app/dist /dist

FROM nginx:alpine

# copy build artifacts from build stage
COPY --from=build /dist /usr/share/nginx/html

# inherit other options from the base image
