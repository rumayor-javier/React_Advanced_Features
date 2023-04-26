import { ProductImage } from '.';
import { ProductButtons } from '.';
import { ProductTitle } from '.';
import { ProductCardHOCProps } from '../interfaces/interfaces';
import { ProductCard as ProductCardHOC } from './ProductCard';
export * from './ProductButtons';
export * from './ProductImage';
export * from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard;