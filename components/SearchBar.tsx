import { View, Image, TextInput } from 'react-native'
import { icons } from '../constants/icons'
import React from 'react'

const SearchBar = () => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
        <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#ab8bff" />

        <TextInput
            onPress={() => {}}
            onChangeText={() => {}}
            value={''}
            placeholder='Search'
            placeholderTextColor="#ab8bff"
            className='text-secondary text-base font-semibold ml-2 flex-1'
            ></TextInput>
    </View>
  )
}

export default SearchBar