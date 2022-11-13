import React from 'react'
import { View, Image } from 'react-native'
import logo from '../../../assets/logo.png'

export default function Topo() {
    return (
        <View style={style.topo}>
            <Image src={logo} />
            <Text style={style.h1}>Olá, Luiza</Text>
            <Text style={style.h3}>Encontre os melhores produtores</Text>
        </View>
    )
}

const style = StyleSheet.create({
    topo: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28,
    },
    h1: {
        fontSize: 26,
        marginTop: 24,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    h3: {
        fontSize: 16,
        lineHeight: 16,
    }
})