import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  title: "Coffe Mug",
  img: "../../../public/coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={"Hello world"} />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
