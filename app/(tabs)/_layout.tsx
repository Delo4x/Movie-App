import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
        name="index"
        options={{
            headerShown: false 
            }}>
        </Tabs.Screen>

        <Tabs.Screen
        name="search"
        options={{
            headerShown: false 
            
            }}>
        </Tabs.Screen>

        <Tabs.Screen
        name="saved"
        options={{
            headerShown: false 
            }}>
        </Tabs.Screen>

        <Tabs.Screen
        name="profile"
        options={{
            headerShown: false 
            }}>
        </Tabs.Screen>
        
    </Tabs>
    
  )
}

export default _layout

const styles = StyleSheet.create({})