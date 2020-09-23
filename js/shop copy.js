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
              "variantId": varId,
              "contents": {
                "img": false,
                "imgWithCarousel": false,
                "title": true,
                "variantTitle": false,
                "options": (varId == 'all'),
                "price": true,
                "description": false,
                "buttonWithQuantity": false,
                "quantity": false,
              },
              "styles": {
                "button": {
                  "@media (min-width: 601px)": {
                    "width": "10px"
                  }
                }
              }
            },
            "cart": {
              "contents": {
                "button": true
              },
              "styles": {
                "footer": {
                  "background-color": "#ffffff"
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": false,
                "variantTitle": false,
                "buttonWithQuantity": false,
                "button": false,
                "quantity": false
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                }
              }
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin": "auto"
                  }
                }
              }
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "background-color": "#000000",
                  ":hover": {
                    "background-color": "#000000"
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