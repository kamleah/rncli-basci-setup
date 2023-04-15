import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
  } from 'react-native';
  import React, { useState } from 'react';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import EvilIcons from 'react-native-vector-icons/EvilIcons'
  import { useNavigation } from '@react-navigation/native';
  import { useSafeAreaInsets } from 'react-native-safe-area-context';
  
  const Header = ({ title }) => {
    const safeAreaInsets = useSafeAreaInsets();
    const navigation = useNavigation();
    return (
        <View style={styles.headerContainer}>
            <StatusBar
                backgroundColor="transparent"
                translucent
                barStyle={'dark-content'}
            />
            <View style={[styles.profileContainer, { marginTop: safeAreaInsets.top }]}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.goBack()}
                    style={styles.icon}>
                    <FontAwesome name="chevron-left" size={20} color={"black"} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.text}>{title}</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.icon}>
                </TouchableOpacity>
            </View>
        </View>
    );
  };
  
  export default Header;
  
  const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#fff',
        marginHorizontal: -20,
    },
    icon: {
        display:'flex',
        width: 40,
        height:40, 
        borderRadius: 22,
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        color: "black",
        fontSize: 16,
        // width: Width / 1.5,
        textAlign: 'center',
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        alignItems: 'center',
        marginHorizontal: 20,
        backgroundColor: '#fff',
    },
  });
  