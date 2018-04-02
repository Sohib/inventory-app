export class Product implements IProduct {
    public sku: string;
    public name: string;
    public imageUrl: string;
    public department: string[];
    public price: number;
    constructor(product: IProduct) {
        this.sku = product.sku;
        this.name = product.name;
        this.imageUrl = product.imageUrl;
        this.department = product.department;
        this.price = product.price;
    }
}

interface IProduct {
    sku: string;
    name: string;
    imageUrl: string;
    department: string[];
    price: number;
}


