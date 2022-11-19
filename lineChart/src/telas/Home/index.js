import React, { useEffect } from "react";
import * as S from './styles'
import { BackHandler, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RNShake from 'react-native-shake';

export default function Home() {
    const navigation = useNavigation()

    useEffect(() => {
        const subscription = RNShake.addListener(() => {
            BackHandler.exitApp()
        });
        return () => subscription.remove();
    }, [])

    return (
        <S.Container>
            <S.Header>
                <S.HeaderText>Tipos de Gráficos</S.HeaderText>
            </S.Header>
            <ScrollView style={{width: 500}}>

            <S.Card onPress={()=> navigation.navigate('singleLine')}>
                <S.Text>Linha Simples</S.Text>
            </S.Card>
            <S.Card onPress={()=> navigation.navigate('multiLine')}>
                <S.Text>Linha Multíplas</S.Text>
            </S.Card>
            <S.Card>
                <S.Text>Câmera</S.Text>
            </S.Card>
            </ScrollView>
        </S.Container>
    );

}
