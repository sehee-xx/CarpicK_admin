FROM node:14

COPY . /carpick_admin/
WORKDIR /carpick_admin/

RUN yarn install
RUN yarn build
CMD yarn start