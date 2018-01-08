FROM node:8.9

RUN mkdir -p /var/www/app/current
ENV appDir /var/www/app/current

WORKDIR ${appDir}

COPY ./.ssl /var/www/app/current/.ssl
COPY ./nodemon.json /var/www/app/current/nodemon.json
COPY ./package.json /var/www/app/current/package.json
COPY ./tsconfig.json /var/www/app/current/tsconfig.json
COPY ./tsconfig.spec.json /var/www/app/current/tsconfig.spec.json

RUN yarn install

ENV PORT 443
EXPOSE 443

CMD ["npm", "start"]
