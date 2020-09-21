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
          node: document.getElementById(elementId),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "contents": {
                "img": true,
                "imgWithCarousel": false,
                "price": false,
                "description": false,
                "buttonWithQuantity": false,
                "quantity": false,
              },
              "styles": {
                "title": {
                  "font-size": "17px"
                },
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px"
                  }
                }
              },
              "buttonDestination": "modal",
              "contents": {
                "button": false,
                "options": false
              },
              "isButton": true,
              "text": {
                "button": "View product"
              }
            },
            "cart": {
              "styles": {
                "button": {
                  ":hover": {
                    "background-color": "#5a5c5a"
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
                    "background-color": "#5a5c5a"
                  },
                  ":focus": {
                    "background-color": "#000000"
                  }
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  ":hover": {
                    "background-color": "#5a5c5a"
                  },
                  "background-color": "#000000",
                  ":focus": {
                    "background-color": "#000000"
                  },
                  "padding-left": "55px",
                  "padding-right": "55px"
                }
              },
              "text": {
                "button": "Add to cart"
              }
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
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