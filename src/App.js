import React, { useState, useEffect } from 'react';
import RecipeReviewCard from './Components/RecipeCard';

import SearchAppBar from './Components/SearchAppBar';
import { Modal } from 'react-responsive-modal';
import {
	FacebookShareButton,
	FacebookIcon,

	TwitterIcon,
	TelegramIcon,
	WhatsappIcon,
	GooglePlusIcon,
	LinkedinIcon,
	PinterestIcon,
	VKIcon,
	OKIcon,
	RedditIcon,
	TumblrIcon,
	LivejournalIcon,
	MailruIcon,
	ViberIcon,
	WorkplaceIcon,
	EmailIcon,



	GooglePlusShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	TelegramShareButton,
	WhatsappShareButton,
	PinterestShareButton,
	VKShareButton,
	OKShareButton,
	RedditShareButton,
	TumblrShareButton,
	LivejournalShareButton,
	MailruShareButton,
	ViberShareButton,
	WorkplaceShareButton,
	EmailShareButton,
} from "react-share";
import './App.css';


const App = () => {

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [done, setDone] = useState('');
	const [modalShow, setModalShow] = React.useState(false);
	const [open, setOpen] = React.useState(false);


	useEffect(() => {
		getRecipes();
	}, [done]);

	const getRecipes = async () => {
		const response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}  `
		);
		const data = await response.json();
		setRecipes(data.meals);
		console.log(window.location.href)
	};

	const updateSearch = (e, data) => {
		
		setSearch(e.target.value);
	};
	const getSearch = e => {
		e.preventDefault();
		setDone(search);
	};


    const  hellow=(e)=>{
		
	}
	
	
    
    
	return (
		<>
			

		 <SearchAppBar
				onChange={updateSearch}
				onSubmit={getSearch}
				value={search}
            />
		<div className='container'>
				{recipes?.map(alam => {
					return (
						<div className='card' key={alam.idMeal}>
							<RecipeReviewCard
								title={alam.strMeal}
								Id={alam.idMeal}
								Img={alam.strMealThumb}
                            />
                           
						</div>
					);
                })}
                
			</div> 
			
			
			
		</>
		
	);
};

export default App;
