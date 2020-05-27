import React, { Component } from 'react'
import Recipes from './Recipes' 
import { UserProvider } from './userContext';
import './Title.css'

const EDAMAM_APP_ID = "de361bb8" 
const EDAMAM_KEY = "b961412fa7a5b66dcc9efa911b8b4909"

export default class Choices extends Component {
    constructor(props) {
        super(props);
        this.state = {
          // data: {}, can work too. 
          myData: [],
          recipesData: [],
    
        };
      }

      setRecipesData() {
        this.setState({
          recipesData: this.state.myData.hits
        })
    }

        componentDidMount() {
            // fetch('http://dummy.restapiexample.com/api/v1/employees')

            fetch(`https://api.edamam.com/search?q=chicken&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_KEY}`) 
            .then((anythingone) => {
                return anythingone.json();
              })
              .then((theirData) => {
                // let entries = Object.entries(theirData);
                // console.log(theirData);

                      
                this.setState({
                  myData: theirData
                })
                   this.setRecipesData();
                // this.setEmployeeData();
              })
          }


    render() {
        //  console.log(this.state.recipesData)
        return (
            <div>
               
          <UserProvider value = {this.state.recipesData}>
          <div className="title">Concoct your own Dream Meals</div> 
              <Recipes />
          </UserProvider>            
            </div>
        )
    }
}
