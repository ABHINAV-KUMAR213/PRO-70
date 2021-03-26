import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
             <View style={{backgroundColor: 'white'}}>
                <Text style={{fontSize: 50,alignItems: 'center',justifyContent: 'center', backgroundColor : 'blue', textAlign : 'center', color : 'white'}}>
                STORY HUB
                </Text>
               <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Read Story</Text>
        </View>
             </View>
                
        )
    }
}

