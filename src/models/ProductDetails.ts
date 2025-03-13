class ProductDetails {
  dishCulture: string;
  imageSrc: string;
  isWeekBest: 'yes' | 'no';
  productDescription: string;
  productName: string;
  rating: number;
  whichPage: 'home' | 'profile';

  constructor(
    dishCulture: string,
    imageSrc: string,
    isWeekBest: 'yes' | 'no',
    productDescription: string,
    productName: string,
    rating: number,
    whichPage: 'home' | 'profile'
  ) {
    this.dishCulture = dishCulture;
    this.imageSrc = imageSrc;
    this.isWeekBest = isWeekBest;
    this.productDescription = productDescription;
    this.productName = productName;
    this.rating = rating;
    this.whichPage = whichPage;
  }
}

export default ProductDetails;
