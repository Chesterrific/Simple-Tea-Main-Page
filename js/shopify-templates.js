// Default Shopify Templates
var buttonTemplate = '<div class="{{data.classes.product.buttonWrapper}}" data-element="product.buttonWrapper"><button {{#data.buttonDisabled}}disabled{{/data.buttonDisabled}} class="{{data.classes.product.button}} {{data.buttonClass}}" data-element="product.button">{{data.buttonText}}</button></div>';

var quantityTemplate = '<div class="{{data.classes.product.quantity}} {{data.quantityClass}}" data-element="product.quantity">' +
  '{{#data.contents.quantityDecrement}}' +
  '<button class="{{data.classes.product.quantityButton}} {{data.classes.product.quantityDecrement}}" type="button" data-element="product.quantityDecrement"><span>-</span><span class="visuallyhidden">Decrement</span></button>' +
  '{{/data.contents.quantityDecrement}}' +
  '{{#data.contents.quantityInput}}' +
  '<input class="{{data.classes.product.quantityInput}}" type="number" min="0" aria-label="Quantity" value="{{data.selectedQuantity}}" data-element="product.quantityInput">' +
  '{{/data.contents.quantityInput}}' +
  '{{#data.contents.quantityIncrement}}' +
  '<button class="{{data.classes.product.quantityButton}} {{data.classes.product.quantityIncrement}}" type="button" data-element="product.quantityIncrement"><span>+</span><span class="visuallyhidden">Increment</span></button>' +
  '{{/data.contents.quantityIncrement}}' +
  '</div>';

var buttonWithQuantity = '<div class="{{data.classes.product.buttonWithQuantity}}" data-element="product.buttonWithQuantity">' + quantityTemplate
  + buttonTemplate + '</div>';

var description = '<div class="{{data.classes.product.description}}" data-element="product.description">{{{data.descriptionHtml}}}</div>';

var price = '<div class="{{data.classes.product.prices}}" data-element="product.prices">' +
  '{{#data.selectedVariant}}' +
  '<span class="visuallyhidden">{{data.priceAccessibilityLabel}}&nbsp;</span>' +
  '<span class="{{data.classes.product.price}} {{data.priceClass}}" data-element="product.price">{{data.formattedPrice}}</span>' +
  '{{#data.hasCompareAtPrice}}' +
  '<span class="visuallyhidden">{{data.compareAtPriceAccessibilityLabel}}&nbsp;</span>' +
  '<span class="{{data.classes.product.compareAt}}" data-element="product.compareAt">{{data.formattedCompareAtPrice}}</span>' +
  '{{/data.hasCompareAtPrice}}' +
  '{{#data.showUnitPrice}}' +
  '<div class="{{data.classes.product.unitPrice}}" data-element="product.unitPrice">' +
  '  <span class="visuallyhidden">{{data.text.unitPriceAccessibilityLabel}}</span>' +
  '  {{data.formattedUnitPrice}}<span aria-hidden="true">/</span><span class="visuallyhidden">&nbsp;{{data.text.unitPriceAccessibilitySeparator}}&nbsp;</span>{{data.formattedUnitPriceBaseUnit}}' +
  '</div>' +
  '{{/data.showUnitPrice}}' +
  '{{/data.selectedVariant}}' +
  '</div>';

var title = '<h1 class="{{data.classes.product.title}}" data-element="product.title">{{data.title}}</h1>';

var h2title = '<h2 class="{{data.classes.product.title}}" data-element="product.title">{{data.title}}</h2>';

var image = '{{#data.currentImage.srcLarge}}<div class="{{data.classes.product.imgWrapper}}" data-element="product.imgWrapper"><img alt="{{data.currentImage.altText}}" data-element="product.img" class="{{data.classes.product.img}}" src="{{data.currentImage.srcLarge}}" /></div>{{/data.currentImage.srcLarge}}';

// Custom Templates
var descriptionTemplate = '<div class="product-details">' +
  description +
  '</div>';

var imgTemplate = '<div class="product-image">' +
  image + title + price + buttonWithQuantity +
  '</div>';

var productTemplate = '<div class=productWrapper>' +
  imgTemplate + descriptionTemplate +
  '</div>';