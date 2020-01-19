import React, {useState} from "React";
import './index.css';
import {ProdTab} from '../prodTab';

export const ProdList = ({products}) => {

    return (
        <div className="prod-list-cntr">
            {products.map(prod=><ProdTab prod={prod}/>)}
        </div>
    )
}
