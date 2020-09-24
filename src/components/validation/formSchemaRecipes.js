import * as yup from 'yup'

export default yup.object().shape({
title: yup.string()
    .required('Recipe name is required')
    .min(3, 'Recipe name must be 3 characters or longer'),
source: yup.string()
    .required('Recipe source is required')
    .min(3, 'Recipe source must be 3 characters or longer'),
// ingredients: yup.string()
//     .required('Must list at least 2 ingredients'),
preptime: yup.string()
    .required('Prep + Cooking time is required')
    .min(3, 'Prep + Cooking time must 3 characters or longer'),
instruction: yup.string()
    .required('Cooking instructions are required')
    .min(3, 'Cooking instructions must be 3 chars or longer'),
// categories: yup.string()
//     .required('At least one category required')
//     .min(3, 'Category must be 3 chars or longer'),
})
