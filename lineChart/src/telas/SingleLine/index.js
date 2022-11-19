import React, { useEffect, useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import {
    VictoryLine,
    VictoryChart,
    VictoryTooltip,
    VictoryContainer,
    VictoryAxis,
    VictoryLegend,
} from "victory-native";
import * as S from "./styles";
import Tts from 'react-native-tts';
import back from '../../../assets/back.png'
import { useNavigation } from "@react-navigation/native";
import { lineOne } from '../../mocks/Lines'
import RNShake from 'react-native-shake';
import Orientation from 'react-native-orientation-locker';

const { width, height } = Dimensions.get('window')
export default function SingleLine() {
    const navigation = useNavigation()
    const [handle, setHandle] = useState(false)

    const handleChart = () => {
        setHandle(!handle)
        if (handle) {
            Tts.speak('Este gráfico de linha intitulado de Porcetagem de livros vendidos no ano de 2022, ele possui uma linha verde e  mostra uma tendência crescente na porcentagem de vendas de livros ao longo do ano. O eixo X vai de janeiro a dezembro. O eixo y vai de 10 porcento até 40 porcento. O final do gráfico continua a subir e o gráfico mostra poucas flutuações.')
        } else {
            Tts.stop()
        }
    }

    useEffect(() => {
        Orientation.lockToLandscape();
        Tts.speak('Clique na tela para escutar o conteúdo do gráfico e chacualhe o celular para voltar para a tela anterior')
        const subscription = RNShake.addListener(() => {
            navigation.goBack()
        });
        return () => {
            subscription.remove();
            Orientation.lockToPortrait();
        }
    }, [])

    return (
        <S.Container >
            <S.Header>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                    Tts.stop()
                }}>
                    <S.BackIcon source={back} />
                </TouchableOpacity>
                <S.Text>Porcetagem de livros vendidos no ano de 2022 (%)</S.Text>
            </S.Header>
            <VictoryContainer
                responsive={true}
                style={{ backgroundColor: "#000" }}
                width={200}
                height={200}
                events={{ onPressIn: () => handleChart() }}
            >
                <VictoryChart
                    horizontal={false}
                    width={200}
                    height={200}
                    style={{
                        axis: { stroke: '#fff', strokeWidth: 5, color: 'red' },
                        ticks: { stroke: '#fff', strokeWidth: 5 },
                        tickLabels: {
                            fill: 'red',
                        },
                    }}
                >
                    <VictoryLegend x={width / 2.4} y={5}
                        orientation="horizontal"
                        gutter={20}
                        style={{ border: { stroke: "none", fontSize: 50 }, title: { fontSize: 20, color: '#fff', textAlign: 'center' } }}
                        data={[
                            { name: "Livros", symbol: { fill: "green" }, labels: { fill: "#fff", fontSize: 16 } },
                        ]}
                    />
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
                                fontSize: 14,
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
                                fontSize: 14,
                            },
                        }}

                    />
                    <VictoryLine
                        events={[{
                            target: "data",
                            eventHandlers: {
                                onPressIn: () => {
                                    handleChart()
                                }
                            }
                        }]}
                        labelComponent={<VictoryTooltip />}
                        animate={{ easing: "bounce" }}
                        data={lineOne}
                        style={{
                            data: { stroke: 'green', strokeWidth: 8 }
                        }}

                    />
                </VictoryChart>
            </VictoryContainer>
        </S.Container>
    );

}