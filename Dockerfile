FROM node
WORKDIR /app
COPY app /app
CMD ["python", "myservice.py"]



#FROM debian
#RUN apt-get update && apt-get install -y cowsay fortune
#VOLUME [ "/logs" ]
