FROM node:18 AS ui-build
WORKDIR /usr/src/app
COPY my-app/ ./my-app/
RUN cd my-app && npm install && npm run build

FROM node:18
WORKDIR /usr/src/app/
COPY --from=ui-build /usr/src/app/my-app/build ./my-app/build
RUN ls

EXPOSE 3080

CMD ["node", "./api.bundle.js"]