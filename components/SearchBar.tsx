import { View, Image, TextInput } from 'react-native'
import { icons } from "constants/icons"

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({placeholder, onPress}: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
        <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff" />
        
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#a8b5db"
          onPress={onPress}
          value=""
          onChangeText={() => {}}
          className="flex-1 ml-2 text-white text-base">
          
        </TextInput>




    </View>
  )
}

export default SearchBar