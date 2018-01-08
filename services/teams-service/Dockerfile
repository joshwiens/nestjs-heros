FROM d3vaint0ne/docker-node8-lts

ENV APP_ENV production

# Set environment variables
RUN mkdir -p /var/www/app/current/teams-service
ENV appDir /var/www/app/current

COPY package.json /var/www/app/current

WORKDIR ${appDir}
RUN npm i --production

# Copy production build files
# ...
COPY ./dist /var/www/app/current/teams-service

# PM2 Configuration
# ...
COPY ./process.yml /var/www/app/current

# DotEnv Configuration
# ...
# COPY ./.env /var/www/app/current/.env

# ENV KEYMETRICS_SECRET <secret>
# ENV KEYMETRICS_PUBLIC <public_key>
# ENV INSTANCE_NAME "teams-service"

#Expose the ports ( Nest http2/s, socket.io, keymetrics )
EXPOSE 7433 43554 80

CMD ["pm2-docker", "start", "--auto-exit", "--env", "production", "process.yml"]
