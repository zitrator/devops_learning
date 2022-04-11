#FROM alpine
#RUN apk add --no-cache bash fortune 
FROM debian
RUN apt-get update && apt-get install -y cowsay fortune
ENV LOG_FNAME=logs.txt
ENTRYPOINT [ "bash" ] 
