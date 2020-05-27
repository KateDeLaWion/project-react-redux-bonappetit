import React from 'react'
import { UserConsumer2 } from './userContext'

export default function Recipes() {

    return (   
        
        
        <UserConsumer2>    
        {

            (anything) => { return <div> 

             {/* {console.log(anything)} */}
                        
           { anything.map(same => {
          return <div > 
            <h2>{same.food.label}</h2>
            
            <br/>
            

            {/* {console.log(same.food.label)} */}

                <br/>
                 </div>
                                   })} 
                                 </div> }                      
        }

        </UserConsumer2>   

            )

}