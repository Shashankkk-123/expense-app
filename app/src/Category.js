import React, { Component } from 'react';
import AppNav from './AppNav';

class Category extends Component {

    state = {  
        isLoading : true,
        Categories : []
    }
 
    async componentDidMount(){
        const response=await fetch('/api/categories');
        const body = await response.json();
        this.setState({Categories : body , isLoading: false});
    }

    render() { 
        const {Categories , isLoading} = this.state;
        if(isLoading) 
            return (<div>Loading...</div>);
        
        return ( 
            
                <div>
                    <AppNav/>
                    <h3>Categories:</h3><br />
                    {
                        Categories.map( category => 
                            <div id={category.id}><h4><center>
                                {category.name}
                         </center>  </h4> </div>
                        )

                    }

                </div>
         );
    }
}
 
export default Category;