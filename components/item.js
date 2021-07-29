class Item {
  name = null;
  price = 0;
  id = null;

  /**
   * @property {String} itemName ; the name of the product
   */
  constructor(itemName, itemPrice) {
    if (this.validator(itemID, itemName, itemPrice)) {
      this.name = itemName;
      this.price = itemPrice;
      this.id = itemID;
    } else {
      throw Error("Invalid data types");
    }
  }

  validator(name, price) {
    if (typeof name != String && typeof price != Number) {
      return false;
    } else if (name.length < 1 && price < 1) {
      //   too short
      return false;
    } else {
      return true;
    }
  }
}
