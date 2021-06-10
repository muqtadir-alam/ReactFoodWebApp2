import React, { useState, useEffect } from 'react';
import RecipeReviewCard from "./Components/RecipeCard"



import SearchAppBar from "./Components/SearchAppBar"
import './App.css';


const App = () => {
    
    // const APP_ID = " ";
    // const APP_KEY = " ";
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [done, setDone] = useState('');
   
    


    useEffect(() => {
      
        getRecipes();
        
    }, [done]);
   

    
 
    const getRecipes = async () => {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}  `
        );
        const data = await response.json();
        setRecipes(data.meals)
       
        

    };



    const updateSearch = (e, data) => {
        // console.log("data", data)
        setSearch(e.target.value);
       
    }
    const getSearch = e => {
        e.preventDefault();
        setDone(search);
    }
    

    return (
        <>
            <SearchAppBar
                onChange={updateSearch}
                onSubmit={getSearch}
                value={search}  />
            
          
            
            <div className="container">
                {
                    recipes.map((alam) => {
                        
                            return (
                             
                                <div className="card" key={alam.idMeal}>
                                    <RecipeReviewCard
                                        title={alam.strMeal}
                                        Id={alam.idMeal}
                                        Img={alam.strMealThumb} />
                                </div>
                    
                            )
                        }
                    )
                }
       
         
            </div>
                  
        </>
    );

}
               

export default App;