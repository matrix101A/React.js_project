import React from 'react'
import './SeasonDisplay.css'
const seasonConfig={summer:{text:'Lets hit the beach',iconName:'sun'},winter:{text:'Brr its chilly',iconName:'snowflake'}}
const getSeason =(lat ,month) =>{
	if(month>2 && month<9){
		
	return lat>0?'summer':'winter';
	}
	else
	{
		return lat<0?'summer':'winter';
	}

}
const SeasonDisplay=props=>{
const season =getSeason(props.lat,new Date().getMonth());
const {text,iconName}=seasonConfig[season]
	return(<div className={`season-display ${season}`}>
	<i className={`icon-left icon ${iconName} massive`} />
	<h1>
		{text}
		</h1>
		<i className={`icon-right icon ${iconName} massive`} />
		
		</div>
		);
};


export default SeasonDisplay;