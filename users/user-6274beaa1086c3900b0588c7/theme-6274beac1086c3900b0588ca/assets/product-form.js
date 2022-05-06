class ProductForm extends HTMLElement {
  constructor() {
    super();   

    this.form = this.querySelector('form');
    this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
    this.cartNotification = document.querySelector('cart-notification');
  }

  onSubmitHandler(evt) {
    evt.preventDefault();
    this.cartNotification.setActiveElement(document.activeElement);
    
    const submitButton = this.querySelector('[type="submit"]');

    submitButton.setAttribute('disabled', true);
    submitButton.classList.add('loading');
    
    const formData = JSON.parse(serializeForm(this.form));
    const {id, quantity, pre, pre_order_expected_date, pre_order_announcement, gift_id} = formData;
    const properties = {};
    let items = '';

    pre ? properties.pre = pre : null;
    pre_order_expected_date ? properties.pre_order_expected_date = pre_order_expected_date : null;
    pre_order_announcement ? properties.pre_order_announcement = pre_order_announcement : null;
    gift_id ? properties._gift_id = gift_id : null;
    const alerdyAdded = gift_id ? this.cartNotification.querySelector('.bc-cart__item[data-id="' + gift_id +'"]') : null;
    
    if(isNaN(gift_id) || alerdyAdded || alerdyAdded !== null){
      items = {'items': [{'id': id, 'quantity': quantity, 'properties': properties}]};
    } else {
      items = {'items': [{'id': id, 'quantity': quantity, 'properties': properties},{'id': gift_id, 'properties': {'_gift': true} }]};
    }

    const body = JSON.stringify(items);

    fetch(`${routes.cart_add_url}`, { ...fetchConfig('javascript'), body })
      .then((response) => response.json())
      .then((data) =>{this.cartNotification.getCart();this.cartNotification.classList.add('new-item-added')})
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        submitButton.classList.remove('loading');
        submitButton.removeAttribute('disabled');
      });
  }
}

customElements.define('product-form', ProductForm);