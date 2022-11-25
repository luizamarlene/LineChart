import styled from "styled-components/native";
import { VictoryContainer } from "victory-native";


export const Container = styled(VictoryContainer)`
    align-items: center;
    background-color: #000;
`

export const Back = styled.TouchableOpacity`
margin-left: 10px;
`

export const BackIcon = styled.Image`
    width: 35px;
    height: 35px;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    padding: 5px 20px;
`

export const Text = styled.Text`
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    margin: 0 auto;
`
