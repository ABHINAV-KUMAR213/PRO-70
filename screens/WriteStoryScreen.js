import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteScreen extends React.Component{
    constructor() {
        super();
        this.state = {
            TitleText: "Story Title",
            AuthorText: "Name of the Author",
            StoryText: "Write your story here"
        }
    }
    render(){
        return(
            <View  style={{backgroundColor: 'white' }}>
               
                <Text style = {{fontSize: 50,alignItems: 'center',justifyContent: 'center', backgroundColor : 'blue', textAlign : 'center', color : 'white'}}>STORY HUB</Text>
                
                <TextInput
                style={style.inputStyle}
                 onChangeText={(text)=>{
                     this.setState({
                         TitleText: text
                    })
                  }}
                  value={this.state.TitleText}/>

                  <TextInput
                      style={style.inputStyle}
                      placeholder="Book Id"
                      onChangeText={(text)=>{
                          this.setState({
                              AuthorText: text
                          })
                      }}
                      value={this.state.AuthorText}/>   

                  <TextInput
                      style={{width:'80%', marginTop: 20, alignSelf: 'center', height: 200,
                       textAlign: 'center', borderWidth: 1,
                       backgroundColor: 'orange', fontFamily : 'calibri', fontWeight :
                        'bold', color : 'white'}}
                      onChangeText={(text)=>{
                          this.setState({
                              StoryText: text
                          })
                      }}
                      multiline={true}
                      value={this.state.StoryText}/>

                      <TouchableOpacity style = {{borderWidth : 1, padding : 5, margin : 20,
                       justifyContent : 'center', alignItems : 'center',alignSelf :
                        'center', height : 50, width 
                      : '62%',  backgroundColor : 'green'}}>
                      <Text style = {{fontFamily : 'calibri', fontSize : 20, 
                      fontWeight : 'bold', color : 'white'}}>
                      Submit
                      </Text>
                      </TouchableOpacity>
            </View>

            
        )
     }
  }

  const style = StyleSheet.create({
    inputStyle: {
        marginTop: 10,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 1,
        //borderRadius: 10,
backgroundColor: 'rgb(255, 191, 142)',
fontFamily : 'calibri',
fontWeight : 'bold',
color : 'white'
      }
  })