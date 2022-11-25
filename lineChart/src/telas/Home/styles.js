import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
align-self: center;
background-color: #000;
width: 100%;
`

export const Header = styled.Text`
color: #fff;
align-self: center;
margin: 50px;
`

export const HeaderText = styled.Text`
color: #fff;
font-weight: bold;
font-size: 20px;
`
export const Text = styled.Text`
color: #000;
font-weight: bold;
font-size: 20px;
`

export const Card = styled.TouchableOpacity`
align-items: center;
align-self: center;
justify-content: space-around;
padding: 20px;
background-color: #008000;
border: 1px solid #ddd;
border-radius: 10px;
margin: 10px;
width: 70%;
`