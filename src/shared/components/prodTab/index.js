import React, {useState} from "React";
import './index.css';

export const ProdTab = ({prod}) => {
    return (
        <div key={prod.id} className="prod-tab">
            <img src={prod.img} />
            <span class="prod-name">{prod.name}</span>
            <span class="prod-price">{prod.price}</span>
        </div>
    )
}
