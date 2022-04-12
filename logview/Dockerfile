FROM node
WORKDIR /app
COPY app /app
RUN npm install express
EXPOSE 3000
ENV LOG_FNAME=logs.txt
ENTRYPOINT ["node", "log_view_service.js"]
