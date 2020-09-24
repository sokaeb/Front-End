import React from 'react'

export default function Recipe({ details }) {
  if (!details) {
    return <h3>Working fetching your recipe&apos;s details...</h3>
  }


////edit and delete recipe 

    //   const editRecipe = (id) => {
    //     axios.delete(`${quotesURL}/${id}`)
    //       .then(res => { // eslint-disable-line
    //         setQuotes(quotes.filter(quote => quote.id !== id))
    //       })
    //       .catch(handleError)
    //       .finally(resetForm)
    //   }
    
    
    //   const editRecipe = (id) => {
    //     const recipe = recipes.find(q => q.id === id)
    //     setFormRecipeValues({ ...recipe })



  return (
    <div className='recipes'>
      <h2>{details.name}</h2>
      <p>source: {details.source}</p>
      <p>completion time: {details.time}</p>
      <p>ingredients: {details.ingredients}</p>
      <p>instructions: {details.instructions}</p>

      {
        !!details.category && !!details.category.length &&
        <div>
          Category:
          <ul>
            {details.category.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }


<button>Edit</button>
    {/* <button data-cy={`editBtn${i}`} onClick={() => editRecipe(q.id)}>Edit</button>
    <button data-cy={`deleteBtn${i}`} onClick={() => deleteRecipe(q.id)}>Delete</button> */}
    </div>
  )
}
