import React, { Component } from 'react'
import Food from './Food' 
import { UserProvider2 } from './userContext';
import './Title.css'

const EDAMAM_APP_ID_FOOD = "9c058a00" 
const EDAMAM_KEY_FOOD = "b17d6bfb55c2c62dc2e1a450cba60604"

export default class Choices extends Component {
    constructor(props) {
        super(props);
        this.state = {
          // data: {}, can work too. 
          myData: [],
          foodData: [],
        
        };
      }

      setFoodData() {
        this.setState({
          foodData: this.state.myData.hints
        })
    }

        componentDidMount() {
            

            fetch(`https://api.edamam.com/api/food-database/parser?ingr=red%20apple&app_id=${EDAMAM_APP_ID_FOOD}&app_key=${EDAMAM_KEY_FOOD}`) 
            .then((anythingone) => {
                return anythingone.json();
              })
              .then((theirData) => {
                
                console.log(theirData);

                      
                this.setState({
                  myData: theirData
                })
                   this.setFoodData();
       
              })
          }


    render() {
        //  console.log(this.state.foodData)
        return (
            <div>
                {/* {console.log(this.state.foodData)} */}
          <UserProvider2 value = {this.state.foodData}>
          <div className="title">Apples of my eye</div>
              <Food />
          </UserProvider2>            
            </div>
        )
    }
}