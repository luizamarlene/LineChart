import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../src/telas/Home"
import SingleLine from "../src/telas/SingleLine/index"
import MultiLine from "../src/telas/MultiLine/index"
import Camera from "../src/telas/Camera"

export default function Routes() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName='home'
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='singleLine' component={SingleLine} />
            <Stack.Screen name='multiLine' component={MultiLine} />
            <Stack.Screen name='camera' component={Camera} />
        </Stack.Navigator>
    )
}
