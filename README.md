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

## Format the query
Two steps are needed in order to fill the required URL in the add-on:
- Paste the query in the [editor](https://livingassets.s3.amazonaws.com/assets/index_graphiql.html?query=query%7B%0A%20%20allBuynows%28condition%3A%20%7BsellerId%3A%220x57191631BFa147F8dFb35E54d9D853E018889D56%22%7D%0A%20%20%29%0A%20%7B%0A%20%20%20%20nodes%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20assetId%0A%20%20%20%20%20%20sellerId%0A%20%20%20%20%20%20price%0A%20%20%20%20%20%20currencyId%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D) and use the pretty print button
- Copy the query and paste it [here](https://livingassets.s3.amazonaws.com/assets/graphiql_generator.html) to build the required URL. The resulting URL is generated after clicking in the Encode for GraphiQL button.