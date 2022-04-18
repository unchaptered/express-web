# Github Action

This document is writtend by _2022-04-01_.

This is a simple Github Action to deploy a static website to Netlify.

Origin documentation@1.7.2
[Netlify Deploy - Github](https://github.com/marketplace/actions/netlify-deploy)

Check right these!

1. Usage
2. Example

## Usage

[Origin Docs](https://github.com/marketplace/actions/netlify-deploy#usage)

```
name: 'My Workflow'

on:
    release:
        type: [published]

jobs:
    deploy:
        name: 'deploy to Netlify'
        steps:
            -user: jsmrcaga/action-netlify-deploy@1.1.0
             with:
                NETLIFY_AUTH_TOKEN: ${{ secrets.MY_TOKEN_SCRET }}
                NETLIFY_DEPLOY_TO_PROD: true
```

### Inputs Opptions

| Name | Required | Default | Description |
| :---: | :----: | :----: | :--- |
| NETLIFY_AUTH_TOKEN | true | N/A | The token needed to deploy your site (generate here) |
| NETLIFY_SITE_ID | true | N/A | The site to where deploy your site (get it from the API ID on your Site Settings) |
| NETLIFY_DEPLOY_MESSAGE | false | '' | An optional deploy message |
| build_directory | false | 'build' | The directory where your files are built |
| functions_directory | false | N/A | The (optional) directory where your Netlify functions are stored |
| install_command | false | Auto-detected | The (optional) command to install dependencies. Runs yarn when yarn.lock is found; npm i otherwise |
| build_command | false | npm run build | The (optional) command to build static website |
| deploy_alias | false | '' | (Optional) Deployed site alias |
| node_version | false | '' | (Optional) Node version or other arguments passed to nvm install |

### Otuputs

| Name | Description |
| :---: | :---------: |
| NETLIFY_OUTPUT | Full output of the action |
| NETLIFY_PREVIEW_URL | The url of deployment preview. |
| NETLIFY_LOGS_URL | The url of the logs. |
| NETLIFY_LIVE_URL | The url of the live deployed site. |


## Example

[Origin Docs](https://github.com/marketplace/actions/netlify-deploy#example)

You can auto deploy to Netlify by 2 methods

1. Using release
2. Using pull request

In my opinion, if your repo is public repo, you can choose 1 for stablity.

But, if not, you can choose 2 for your conveinience.
