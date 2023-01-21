export class Cart {
  static readonly products: Product[] = [];

  static insertProduct(...products: Product[]): void {
    products.forEach((product) => {
      Cart.products.push(product);
    });
  }

  static quantityOfProducts(): void {
    console.log(this.products.length);
  }

  static totalPrice(): void {
    const total = this.products.reduce(
      (acc, product) => acc + product.price,
      0,
    );
    console.log(total.toFixed(2));
  }
}

class Product {
  constructor(public name: string, public price: number) {}
}

const product = new Product('Casaco', 90);
const product2 = new Product('Camiseta', 40);
const product3 = new Product('Bermuda', 60);
const product4 = new Product('Sapato', 80);

Cart.insertProduct(product, product2, product3, product4);

console.log(Cart.products);

Cart.quantityOfProducts();

Cart.totalPrice();
