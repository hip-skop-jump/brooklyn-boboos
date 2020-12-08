FROM node:14-alpine

LABEL maintainer="Hip Skop Jump"

WORKDIR /app

ENV PORT=3000

COPY . .

RUN npm ci && npm run build:prod
ENTRYPOINT [""]
CMD ["npm", "start"]
