import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import ReadStoryScr from './screens/ReadStoryScreen';
import WriteStoryScr from './screens/WriteStoryScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';



export default class App extends React.Component{
   render(){
    return (
    
      <AppContainer/>
    
   );
  }
  
}

const TabNavigator = createBottomTabNavigator({
  WriteStory:{screen:WriteStoryScr},
  ReadStory:{screen:ReadStoryScr},
  
},
{defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ()=>{
    const routeName = navigation.state.routeName;
    console.log(routeName)
    if(routeName === "ReadStory"){
      return(
        <Image
        source={require("./assets/read.png")}
        style={{width:25, height:25}}
       />
      )
      
    }
    else if(routeName === "WriteStory"){
      return(
        <Image
        source={require("./assets/write.png")}
        style={{width:25, height:25}}
       />
      )
      
    }
  }
})
}
);
const AppContainer = createAppContainer(TabNavigator);