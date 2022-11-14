import React from "react";
import * as S from './styles'
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation()

    return (
        <S.Container>
            <S.Header>
                <S.HeaderText>Tipos de Gráficos</S.HeaderText>
            </S.Header>
            <S.Card onPress={()=> navigation.navigate('singleLine')}>
                <S.Text>Linha Simples</S.Text>
            </S.Card>
            <S.Card onPress={()=> navigation.navigate('multiLine')}>
                <S.Text>Linha Multíplas</S.Text>
            </S.Card>
        </S.Container>
    );

}
