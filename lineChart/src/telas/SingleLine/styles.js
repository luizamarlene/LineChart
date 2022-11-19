import styled from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    background-color: #000;
`

export const Back = styled.TouchableOpacity`
    margin-left: 20px;
    margin-right: 20px;
`

export const BackIcon = styled.Image`
    width: 40px;
    height: 40px;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    padding: 5px 20px;
    width: 100%;
`

export const Text = styled.Text`
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    margin: 0 auto;
`
