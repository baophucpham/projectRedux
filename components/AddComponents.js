import React, { Component } from 'react';
import { AppRegistry, View, FlatList, StyleSheet, Text ,TextInput,TouchableHighlight, Image} from 'react-native';
import { addNewTask } from '../actions';

export default class AddComponents extends Component {
    constructor(props) {
        super(props);
        this.state=({
            newTaskName:''
        })
    }
    render() {
        return (
            <View style={{
                backgroundColor: 'tomato',
                flexDirection: 'row',
                justifyContent: "flex-end",
                alignItems: 'center',
                height: 64,
            }}>
                <TextInput style={{
                    height: 40,
                    width:200,
                    margin:10,
                    padding:10,
                    borderColor:'white'   
                }}
                keyboardType='default'
                placeholderTextColor="white"
                placeholder='Enter task name'
                autoCapitalize="none"
                onChangeText={(text) => this.setState({newTaskName: text})}
                />
                <TouchableHighlight 
                style={{marginRight:10}}
                underlayColor='blue'
                onPress={(event)=>{
                    if(!this.state.newTaskName.trim()){
                        return;
                    }

                }}>
                    <Image
                    style={{width:35,height:35}}
                    source={require('../icon/add.png')}
                    />
                </TouchableHighlight>

            </View>
        )
    }
}