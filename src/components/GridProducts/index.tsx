import React from "react";
import ProductModel from "../../models/Product";
import "./index.css";
interface IGridProductsProps {
  title: string;
  products?: ProductModel[];
}

const GridProducts: React.FC<IGridProductsProps> = ({
  title,
  products = undefined,
}) => {
  return (
    <div className="top-brands">
      <div className="container">
        <h3>{title}</h3>
        <div className="agile_top_brands_grids">
          {products?.map((product, index) => {
            return (
              <div key={index} className="col-md-3 top_brand_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid">
                    <div className="agile_top_brand_left_grid_pos">
                      <div className="callout badge_product badge-square">
                        <div className="badge-inner secondary on-sale">
                          <span className="onsale">{product.discount}</span>
                        </div>
                      </div>
                    </div>
                    <div className="agile_top_brand_left_grid1">
                      <figure>
                        <div className="snipcart-item block">
                          <div className="snipcart-thumb">
                            <a href="single.html">
                              <img
                                title={product.name}
                                alt={product.name}
                                src={product.image}
                              />
                            </a>
                            <p>{product.name}</p>
                            <h4>
                              {product.price} <span>{product.priceBegin}</span>
                            </h4>
                          </div>
                        </div>
                        <div className="snipcart-details top_brand_home_details">
                          <form action="" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="Fortune Sunflower Oil"
                              />
                              <input type="hidden" name="amount" value="7.99" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Thêm vào giỏ hàng"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
};

export default GridProducts;
