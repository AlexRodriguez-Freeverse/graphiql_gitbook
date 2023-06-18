# Integration of GraphiQL
## Integration module for Gitbook

The main description is in the [Gitbook documentation](https://developer.gitbook.com/integrations/integrations)

There are several examples in [the repo](https://github.com/GitbookIO/integrations/tree/main/integrations)

For submitting the integration, you just need to run this command:
```sh
gitbook publish
```
After it, the command line will show the integration URL. Something like this:
```sh
🚀 Integration "GraphiQL" published
👉 https://app.gitbook.com/integrations/GraphiQL
```
When the URL is browsed, and logged in in Gitbook, it automatically add the integration in the designed space, the one used for creating the API_KEY.

For connecting the integration to the local code, this command is needed:
```sh
gitbook dev 0CbiPo9O1vg65a4rm24Q
```

That key is retrieved from the space UI. More info [here](https://developer.gitbook.com/getting-started/concepts#less-than-spaceid-greater-than)

It is important to note that all the changes in the code are automatically pushed to Gitbook, except the ones in the gitbook-manifest.yaml