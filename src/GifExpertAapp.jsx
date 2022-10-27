import React from 'react';
import { useState } from 'react';
import { AddCategories, GifGrid } from '../src/components';

export const GifExpertAapp = () => {

  const [categories, setcategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setcategories([...categories, newCategory]);
  }

  return (
    <>   {/* Titulo */}
         <h1>GifExpertAapp</h1>
         {/* Input */}
         <AddCategories 
           onNewCategory = { (value) => onAddCategory(value) }
          />
         {/* Lista de Gif */}
     
          {
             categories.map( (category) => (
             <GifGrid 
                   key={ category } 
                   category = {category} />
              ))
          }
         {/* Gif Item */}
    </>
  )
}
