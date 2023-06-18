import { createComponent, createIntegration } from '@gitbook/runtime';

interface BlockProps {
 query: string;
}

const graphiQLComponent = createComponent<BlockProps>({
  componentId: 'embed',
  async action(block, action) {
    if (action.action === '@link.unfurl') {
      return {
        props: {
          query: action.url.slice('https://dev.livingassets.io/'.length)
        }
      };
    }
  },
  
  async render(block) {
    const { query } = block.props;
  
    // Sample query: https://dev.livingassets.io/query%20%7B%E7%E7%20%20allSupportedCryptocurrencies%E7%E7%20%20%7B%E7%E7%20%20%20%20nodes%20%7B%E7%E7%20%20%20%20%20%20currencyId%E7%E7%09%09%09symbol%E7%E7%20%20%20%20%20%20paymentsContractAddress%E7%E7%20%20%20%20%7D%E7%E7%20%20%7D%E7%E7%7D
    var queryWithNewlines = query.replaceAll("%E7%E7", "%0A");
    console.log("Log query:" + queryWithNewlines);

    return (
      <block>
          <webframe
              source={{
                  url: `https://livingassets.s3.amazonaws.com/assets/index_graphiql.html?query=${queryWithNewlines}`,
              }}
              aspectRatio={1/1}
          />
      </block>
    );
  }
});

export default createIntegration({
  components: [graphiQLComponent]
});