class ProductDetails {
  dishCulture: string;
  imageSrc: string;
  isWeekBest: 'yes' | 'no';
  productDescription: string;
  productName: string;
  rating: number;
  typeOfButton: 'knowMore' | 'addToCart';

  constructor(
    dishCulture: string,
    imageSrc: string,
    isWeekBest: 'yes' | 'no',
    productDescription: string,
    productName: string,
    rating: number,
    typeOfButton: 'knowMore' | 'addToCart'
  ) {
    this.dishCulture = dishCulture;
    this.imageSrc = imageSrc;
    this.isWeekBest = isWeekBest;
    this.productDescription = productDescription;
    this.productName = productName;
    this.rating = rating;
    this.typeOfButton = typeOfButton;
  }
}

export default ProductDetails;
