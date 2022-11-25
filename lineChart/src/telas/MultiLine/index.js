import React, { useEffect } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { VictoryLine, VictoryChart, VictoryTooltip, VictoryContainer, VictoryAxis } from "victory-native";
import * as S from "./styles";
import Tts from 'react-native-tts';
import back from '../../../assets/back.png'
import { useNavigation } from "@react-navigation/native";
import { lineOne, lineTwo } from '../../mocks/Lines'

const { width, height } = Dimensions.get('window')

export default function MultiLine() {
    const navigation = useNavigation()
    useEffect(() => {
        Tts.speak('Este gráfico de linha possui duas linhas. O Título do gráfico é porcetagem de livros vendidos no ano de 2022. A primeira linha representa os livros de romance e a segunda linha representa os livros de terror. O eixo X vai de janeiro a dezembro. O eixo Y vai de 10 porcento até 40 porcento. Os livros de romance mostra uma tendência crescente na porcentagem de vendas ao longo do ano, já no final continua a subir e mostra poucas flutuações. Os livros de terror mostra uma tendência decrescente na porcentagem de vendas ao longo do ano, já no final continua a descer e mostra poucas flutuações')
    },[])
    return (
        <>
            <S.Header>
                <TouchableOpacity onPress={() =>{
                    navigation.goBack()
                    Tts.stop()
                }}>
                    <S.BackIcon source={back} />
                </TouchableOpacity>
                <S.Text>Porcetagem de livros vendidos no ano de 2022 (%)</S.Text>

            </S.Header>
            <VictoryContainer
                style={{ backgroundColor: "#000" }}
                width={width}
                height={height}
                events={{ onClick: (event) => Tts.stop() }}
            >
                <VictoryChart
                    horizontal={false}
                    style={{
                        axis: { stroke: '#fff', strokeWidth: 5, color: 'red' },
                        ticks: { stroke: '#fff', strokeWidth: 5 },
                        tickLabels: {
                            fill: 'red',
                        },
                    }}
                >
                    <VictoryAxis
                        scale="time"
                        key={lineOne}
                        standalone={false}
                        tickValues={lineOne}
                        style={{
                            axis: { stroke: '#fff', strokeWidth: 2 },
                            ticks: { stroke: '#fff', strokeWidth: 1 },
                            tickLabels: {
                                fill: '#fff',
                                fontSize:16,
                            },
                        }}
                    />
                    <VictoryAxis dependentAxis
                        domain={[10, 40]}
                        offsetX={45}
                        orientation="left"
                        standalone={false}
                        style={{
                            axis: { stroke: '#fff', strokeWidth: 2 },
                            ticks: { stroke: '#fff', strokeWidth: 1 },
                            tickLabels: {
                                fill: '#fff',
                                fontSize: 16,
                            },
                        }}

                    />
                    <VictoryLine
                        events={[{
                            target: "data",
                            eventHandlers: {
                                onClick: () => {
                                    return [
                                        {
                                            target: "labels",
                                            eventKey: "all",
                                            mutation: ({ style }) => {
                                                return style.stroke === "red"
                                                    ? { style: { stroke: "green", strokeWidth: 50 } }
                                                    : { style: { stroke: "red", strokeWidth: 50} };
                                            }
                                        }
                                    ];
                                }
                            }
                        }]}
                        labelComponent={<VictoryTooltip />}
                        animate={{ easing: "bounce" }}
                        data={lineOne}
                        style={{
                            data: { stroke: 'green', strokeWidth: 4 }
                        }}

                    />
                    <VictoryLine
                        events={[{
                            target: "data",
                            eventHandlers: {
                                onClick: () => {
                                    return [
                                        {
                                            target: "labels",
                                            eventKey: "all",
                                            mutation: ({ style }) => {
                                                return style.stroke === "red"
                                                    ? { style: { stroke: "green", strokeWidth: 50 } }
                                                    : { style: { stroke: "red", strokeWidth: 50 } };
                                            }
                                        }
                                    ];
                                }
                            }
                        }]}
                        labelComponent={<VictoryTooltip />}
                        animate={{ easing: "bounce" }}
                        data={lineTwo}
                        style={{
                            data: { stroke: 'red', strokeWidth: 4 }
                        }}

                    />
                </VictoryChart>
            </VictoryContainer>
        </>
    );

}