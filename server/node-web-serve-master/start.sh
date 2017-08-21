#!/bin/sh


pm2 stop ef-web-app.js                                                                 #网站
pm2 start ef-web-app.js --name ef-web-app --node-args='--harmony' --watch              #网站

