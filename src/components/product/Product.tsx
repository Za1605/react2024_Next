import React,{FC} from 'react';


export interface IProductProps {
    id: number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "brand": string,
    "category": string,
    "thumbnail"?: string[],
    "images": string,
}

export type IProductTypeProps = IProductProps &{children?: React.ReactNode};
const Product :FC <IProductTypeProps> = ({
                                            id,
                                             title,
                                              price,
                                             brand,
                                             images}) => {
    return (
        <div>
           <h2>{title}. {price}. {brand}</h2>
            <img src={images} alt={title}/>

            </div>
    );
};

export default Product;