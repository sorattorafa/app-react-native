import React, { useState, useEffect } from 'react'; 
import { SafeAreaView, Text, Image, AsyncStorage, StyleSheet } from 'react-native'; 
   
import SpotList from '../components/spotlist';
import logo from '../../assets/logo.png';
export default function List(){  
    const [techs, setTechs] = useState([]); 
    useEffect(() => { 
        AsyncStorage.getItem('techs').then(storageTechs => { 
        const techsArray = storageTechs.split(',').map(tech => tech.trim()); 
        setTechs(techsArray);    
        })
    }, []); 

    return (   
    <SafeAreaView style={styles.container}> 
        <Image style={styles.logo} source={logo}/> 
        {techs.map(tech => <SpotList key={tech} tech={tech} />)}
    </SafeAreaView> 
    )
} 
const styles = StyleSheet.create({ 
    container:{ 
        flex:1,
    }, 
    logo:{ 
        height:32, 
        resizeMode: "contain", 
        alignSelf: 'center', 
        marginTop: 10
    },
});