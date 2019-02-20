import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {StyleSheet, View, Text, TouchableOpacity, TextInput,Dimensions,Keyboard,TouchableWithoutFeedback} from 'react-native';
import submit from './submit';


const required = value=>value?undefined:'Required';
const maxLenght = value=>value && value.length>15 ?"Must be 15 character or less":undefined;
const number = value=>value && isNaN(Number(false))?"Must be a number":undefined;
const minValue = min=>value=> value &&value<min ?`Must be least ${min}`:undefined;
const minValue18 = minValue(18);
const isValidEmail = value=> value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?"Invalid email address":undefined;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


const renderField =({place,keyboardType,secureTextEntry,returnKeyType,meta:{touched,error,warning},input:{onChange,...restInput}})=>{
    return (
        <View style={{flexDirection:'column',alignItems:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                <TextInput style={styles.input_login}
                returnKeyType={returnKeyType} autoCorrect={false} 
                keyboardType={keyboardType} onChangeText={onChange}{...restInput} placeholder={place} secureTextEntry={secureTextEntry}> 
                </TextInput>
            </View>
            {touched && ((error && <Text style={{color:'red'}}>{error}</Text>) || 
            (warning &&(<Text style={{color:'orange'}}>{warning}</Text>)))}
        </View>
    );
}
const styles=StyleSheet.create({
    input_login:{
        width:deviceWidth/(360/270),
        height:deviceHeight/(740/39),
        borderRadius:20,
        borderColor:'gray',
        borderWidth:0.5,
        paddingLeft:20,
        fontSize:16,
        
    },
    login_button:{
        marginTop:deviceHeight/(740/103),
        alignItems:'center',
        backgroundColor:'#1f93f8',
        fontSize:20,    
    }
});
const ContactComponent = props=>{
    const secure = true;
    const {handleSubmit} =props;
    return (
        
        <View style={{flex:1,flexDirection:'column',margin:40,justifyContent:'flex-start'}}>
            
            <Field keyboardType="default" place="Username" name="username" component={renderField} secureTextEntry={!secure}
                returnKeyType="next" validate={[required,maxLenght]}
            />
            <Field keyboardType="default" name="password" component={renderField} returnKeyType="done"
                validate={[required]} place="Password" secureTextEntry={secure} 
            />

            <TouchableOpacity 
                onPress={handleSubmit(submit)} style={[styles.input_login,styles.login_button]}
            >
                <Text style={{color:'white',fontSize:20,marginTop:6}}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}
const ContactForm = reduxForm({
    form:'contact',
})(ContactComponent);

export default ContactForm;