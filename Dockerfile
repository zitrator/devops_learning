FROM debian
RUN apt-get update && apt-get install -y cowsay fortune
VOLUME [ "/logs" ]