import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';

const required = value=>value?undefined:'Required';
const maxLenght = value=>value && value.length>15 ?"Must be 15 character or less":undefined;
const number = value=>value && isNaN(Number(false))?"Must be a number":undefined;
const minValue = min=>value=> value &&value<min ?`Must be least ${min}`:undefined;
const minValue18 = minValue(18);
const isValidEmail = value=> value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ?"Invalid email address":undefined;

// const validate = values=>{
//     const errors ={};
//     if(!values.username){
//         errors.username='Required';
//     }else if(values.username.length >20){
//         errors.username = 'username must be less than or equal 20 characters';
//     }
//     if(!values.email){
//         errors.email='Required';
//     }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//         errors.email ='Invalid email address';
//     }
//     return errors;
// }
const renderField =({place,keyboardType,meta:{touched,error,warning},input:{onChange,...restInput}})=>{
    return (
        <View style={{flexDirection:'column',alignItems:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                <TextInput style={{borderColor:'blue',borderWidth:1,height:37,width:220,padding:5}}
                keyboardType={keyboardType} onChangeText={onChange}{...restInput} placeholder={place}> 
                </TextInput>
            </View>
            {touched && ((error && <Text style={{color:'red'}}>{error}</Text>) || 
            (warning &&(<Text style={{color:'orange'}}>{warning}</Text>)))}
        </View>
    );
}
const submit =values=>{
    alert(`Valdation success. Values = ~ $(JSON.stringify(values)`);
}
const ContactComponent = props=>{
    const {handleSubmit} =props;
    return (
        <View style={{flex:1,flexDirection:'column',margin:40,justifyContent:'flex-start'}}>
            <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center',margin:10}}>Redux form sample</Text>
            <Field keyboardType="default" place="Username" name="username" component={renderField} 
                validate={[required,maxLenght]}
            />
            <Field keyboardType="email-address" name="email" component={renderField} 
                validate={[required,isValidEmail]} place="Email"
            />
            <TouchableOpacity 
                onPress={handleSubmit(submit)} style={{margin:10,alignItems:'center'}}
            >
                <Text style={{backgroundColor:'blue',color:'white',fontSize:16,height:37,width:200,textAlign:'center',padding:10}}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}
const ContactForm = reduxForm({
    form:'contact',
})(ContactComponent);

export default ContactForm;