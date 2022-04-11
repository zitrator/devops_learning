FROM node
WORKDIR /app
COPY app /app
RUN npm install express
EXPOSE 3000
ENV LOG_FNAME=logs.txt
ENTRYPOINT ["node", "myservice.js"]

# docker build -t my_node .
# docker run -d -p 80:3000 my_node
# docker stop $(docker ps -lq)
# docker rm $(docker ps -lq)
# 