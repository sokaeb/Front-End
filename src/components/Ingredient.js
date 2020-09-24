import React, { useState, useEffect } from 'react';

export default function Ingredient(props) {
    const { index, item, updateIngredients } = props;
    const [ ingredientObj, setIngredientObj ] = useState({
        ingredientid: item.ingredient.ingredientid,
        name: item.ingredient.name,
        amount: item.ingredient.amount
    });

    function updateIngredientObj(evt) {
        const { name, value } = evt.target;
        setIngredientObj({
            ...ingredientObj,
            [name]: value
        });
    }

    useEffect(() => {
        updateIngredients(index, ingredientObj);
    }, [ingredientObj]);

    return (
        <>
            <div className="ingredients">
                <input
                    type="text"
                    placeholder="ingredient"
                    value={ingredientObj.name}
                    onChange={updateIngredientObj}
                    name="ingredient"
                />
                <input
                    type="text"
                    placeholder="amount"
                    value={ingredientObj.amount}
                    onChange={updateIngredientObj}
                    name="amount"
                />
            </div>
    </>
    );
}