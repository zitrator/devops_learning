FROM node
WORKDIR /app
COPY app /app
RUN npm install express
EXPOSE 3001
ENV LOG_FNAME=logs.txt
ENTRYPOINT ["node", "any_service.js"]
