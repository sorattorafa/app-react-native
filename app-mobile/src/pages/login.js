import React, {useState} from 'react'; 
import { View, KeyboardAvoidingView, Text, Platform, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'; 
import logo from '../../assets/logo.png'; 
import api from '../services/api'; 

export default function Login(){   
    const [email, setEmail] = useState(''); 
    const[tech, setTech] = useState(''); 

    async function handleSubmit(){  
        // email  
        // console.log(email); 
        // console.log(tech);  
        {/**
        const response = await api.post('/sessions', { 
            email
        }) 
        const {_id} = response.data; 
        console.log(_id); 
         */}
    }
    return <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}> 
        <Image source={logo}/>  
        <View style={styles.form}> 
           <Text style={styles.label}> Seu email</Text> 
           <TextInput  
           style={styles.input} 
           placeholder='Seu email' 
           keyboardType='email-address' 
           placeholderTextColor='#999'  
           autoCapitalize='none' 
           autoCorrect={false} 
           value={email} 
           onChangeText ={setEmail}
           />   
           <Text style={styles.label}> Tecnologias Conhecidas</Text> 
           <TextInput  
           style={styles.input} 
           placeholder='Tecnologias' 
           placeholderTextColor='#999'   
           autoCapitalize='words' 
           autoCorrect={false} 
           value={tech} 
           onChangeText ={setTech}
           />  
           <TouchableOpacity onPress={handleSubmit} style={styles.buttom}> 
            <Text style={styles.buttomText}> Encontrar vagas </Text>
           </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>
} 

const styles = StyleSheet.create({ 
    container:{ 
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    }, 
    form:{ 
        alignSelf: 'stretch', 
        paddingHorizontal:30, 
        marginTop:30
    },
    label:{ 
        fontWeight: 'bold', 
        color:'#444', 
        marginBottom:8,
    }, 
    input:{ 
        borderWidth:1, 
        borderColor:'#ddd', 
        paddingHorizontal:20, 
        fontSize:16, 
        color:'#444', 
        height:44, 
        marginBottom:20, 
        borderRadius:2 

    }, 
    buttom:{ 
        height:42, 
        backgroundColor:'#f05a5b', 
        justifyContent:'center', 
        alignItems:'center', 

    }, 
    buttomText:{ 
        color:'#fff', 
        fontWeight:'bold', 
        fontSize:16,
    },

});