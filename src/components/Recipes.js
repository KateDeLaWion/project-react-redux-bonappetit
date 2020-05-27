import React from 'react'
import { UserConsumer } from './userContext'

export default function Recipes() {

    return (   
        <UserConsumer>

        {

            (anything) => { return <div> 

             {/* {console.log(anything)} */}
                        
           { anything.map(same => {
          return <div > 

            {/* <h2>{same.recipe.url}</h2> */}
            <p></p>
            <a href={same.recipe.url} >Recipe, click here</a>
            <br/>
            

            {/* {console.log(same.recipe.url)} */}

                <br/>
                 </div>
                                   })} 
                                 </div> }                      
        }
        
        </UserConsumer>         
            )

}
