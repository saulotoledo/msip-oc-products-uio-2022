FROM node:16.10-alpine

RUN mkdir -p /app
WORKDIR /app

CMD [ "sleep", "infinity" ]
