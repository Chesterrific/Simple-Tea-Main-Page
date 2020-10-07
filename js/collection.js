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
      domain: 'freelancefriends.myshopify.com',
      storefrontAccessToken: '5ab91a7af0d45b7464beb1d27dd8a2b6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {

      jQuery(".wps-buy-button").each(function () {

        elementId = '';
        productId = jQuery(this).attr("data-id");
        varId = jQuery(this).attr("data-var");


        // Custom Templates
        var collectionTemplate = '<div class="collectionItem">' +
        '<a href=./products/' + productId + '.html>' + image + '</a>' + 
        h2title + price + buttonWithQuantity +
        '</div>';

        if (varId) {
          elementId = productId + "-" + varId;
        } else {
          elementId = productId;
        }

        ui.createComponent('product', {
          id: [parseInt(productId)],
          variantId: parseInt(varId),
          node: document.getElementById(elementId),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "events": {
                afterRender: function(e) {
                  console.log('done');
                  $('head').append('<link rel="stylesheet" href="../css/shopify.css">');
                }
              },
              "iframe": false,
              "variantId": varId,
              "contents": {
                "img": true,
                "imgWithCarousel": false,
                "title": false,
                "variantTitle": false,
                "options": true,
                "price": false,
                "description": false,
                "buttonWithQuantity": false,
                "button": false,
                "quantity": false,
              },
              "templates": {
                "img" : collectionTemplate
              }
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
          }
        });
      });
    });
  }
})();
/*]]>*/