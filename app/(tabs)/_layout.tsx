import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
        name="index"
        options={{
            title: "Home",
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