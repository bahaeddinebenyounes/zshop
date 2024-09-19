class Category {
    constructor(id, name) {
      this.id = id;
      this.name = name;
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  }
  
  export default Category;
  