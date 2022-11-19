import React, { useEffect, useState } from "react"
import { Dimensions, TouchableOpacity } from "react-native"
import { VictoryLine, VictoryChart, VictoryTooltip, VictoryContainer, VictoryAxis, VictoryLegend } from "victory-native"
import * as S from "./styles"
import Tts from 'react-native-tts'
import back from '../../../assets/back.png'
import { useNavigation } from "@react-navigation/native"
import { lineOne, lineTwo } from '../../mocks/Lines'
import RNShake from 'react-native-shake';
import Orientation from 'react-native-orientation-locker';

const { width, height } = Dimensions.get('window')
export default function MultiLine() {
    const navigation = useNavigation()

    const [handle, setHandle] = useState(false)

    const handleChart = () => {
        setHandle(!handle)
        if (handle) {
            Tts.speak('Este gráfico de linha possui duas linhas. O Título do gráfico é porcetagem de livros vendidos no ano de 2022. A primeira linha é verde e representa os livros de romance e a segunda linha é vermelha e representa os livros de terror. O eixo X vai de janeiro a dezembro. O eixo Y vai de 10 porcento até 40 porcento. Os livros de romance mostram uma tendência crescente na porcentagem de vendas ao longo do ano, já no final continua a subir e mostra poucas flutuações. O seu valor mínimo é de 16 livros em maio e o valor máximo é 36 livros em outubro. Já os livros de terror mostra uma tendência decrescente na porcentagem de vendas ao longo do ano, já no final continua a descer e mostra poucas flutuações. O seu valor mínimo é de 16 livros e o valor máximo é 36 livros.')
        } else {
            Tts.stop()
        }
    }

    useEffect(() => {
        Orientation.lockToLandscape();
        Tts.speak('Clique na tela para escutar o conteúdo do gráfico ou chacualhe o celular para voltar para a tela anterior')
        const subscription = RNShake.addListener(() => {
            navigation.goBack()
        });
        return () => {
            subscription.remove();
            Orientation.lockToPortrait();
        }
    }, [])

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
                events={{ onPressIn: () => handleChart() }}
            >
                
                <VictoryChart
                    width={width}
                    height={height - 80}
                    style={{
                        axis: { stroke: '#fff', strokeWidth: 5, color: 'red' },
                        ticks: { stroke: '#fff', strokeWidth: 5 },
                        tickLabels: {
                            fill: 'red',
                        },
                    }}
                >
                    <VictoryLegend x={width/3} y={5}
                        orientation="horizontal"
                        gutter={30}
                        style={{ border: { stroke: "none" }, title: { fontSize: 20, color: '#fff', textAlign: 'center' } }}
                        data={[
                            { name: "Livros de Romance", symbol: { fill: "green", }, labels: { fill: "#fff", fontSize: 16 } },
                            { name: "Livros de Terror", symbol: { fill: "red", }, labels: { fill: "#fff", fontSize: 16  } },
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
                                fontSize:14,
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
                        animate={{ easing: "bounce" }}
                        data={lineOne}
                        style={{
                            data: { stroke: 'green', strokeWidth: 7 }
                        }}

                    />
                    <VictoryLine
                        animate={{ easing: "bounce" }}
                        data={lineTwo}
                        style={{
                            data: { stroke: 'red', strokeWidth: 7 }
                        }}

                    />
                </VictoryChart>
            </VictoryContainer>
        </>
    );

}