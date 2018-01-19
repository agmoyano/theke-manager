FROM    node:alpine

RUN     mkdir /opt/project
WORKDIR /opt/project

COPY    package.json /opt/project
RUN     npm install --production 
COPY    dist /opt/project/dist
COPY    server /opt/project/server
EXPOSE  80
CMD     [ "npm", "start" ]