interface Product {
    id: string;
    name: string;
    price: string;
    image: string;
    inStock: number;
    fastDelivery: boolean;
    rating: number;
    qty?: number;
}

export default Product;
