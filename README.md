# Contributor License Agreement Bot

The cla-bot manages and monitors all contributors who have signed the <b> Contributors License Agreement </b> of an organization. It has the capabilites to comment on PR's if the contributor hasn't signed the [agreement](https://gist.github.com/rifhanakram/668ad7011bbe079b93ead96e5dc4ec56) before issuing the PR.

## Setup Guide

- Fork and clone your fork
- Run `npm i` from within the project directory
- Create a `.env` file with the schema specified in the `.env.example` file.
- Setup MongoDB locally or you can simply use [MLab](https://mlab.com) they have a free Sandbox plan.
- Finally run `npm run dev`
- We utilize [cla-bot](https://github.com/clabot/clabot) for this project, so its best you read through there documentation. 

# License

[ MIT Licensed](https://github.com/99xt/cla-bot/blob/master/LICENSE)

