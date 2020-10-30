
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'simpleteastore.myshopify.com',
      storefrontAccessToken: 'bdd594431e6175c61f40d0a13f82d6ba',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {

      jQuery(".product").each(function () {

        var elementId = this.id;

        ui.createComponent('product', {
          id: [parseInt(elementId)],
          node: document.getElementById(elementId),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "iframe": false,
              "layout": "horizontal",
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true,
                "description": true
              },
              "width": "80%",
              "text": {
                "button": "Add to cart"
              },
            },
            "cart": {
              "styles": {
                "button": {
                  ":hover": {
                    "background-color": "#5c5c5c"
                  },
                  "background-color": "#000000",
                  ":focus": {
                    "background-color": "#000000"
                  }
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              }
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "background-color": "#000000",
                  ":hover": {
                    "background-color": "#5c5c5c"
                  },
                  ":focus": {
                    "background-color": "#000000"
                  }
                }
              }
            }
          },
        });
      });
    });
  }
})();
/*]]>*/