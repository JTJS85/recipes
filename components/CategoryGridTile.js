import React from 'react'
import { Pressable, View, Text } from 'react-native'

function CategoryGridTile({title, color}) {
  return <View>
    <Pressable>
        <View>
            <Text style={{backgroundColor:color}} >{title} </Text>
        </View>
    </Pressable>
  </View>
}

export default CategoryGridTile