import React, { useEffect, useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { VictoryLine, VictoryChart, VictoryTooltip, VictoryContainer, VictoryAxis } from "victory-native";
import * as S from "./styles";
import Tts from 'react-native-tts';
import back from '../../../assets/back.png'
import { useNavigation } from "@react-navigation/native";
import { lineOne } from '../../mocks/Lines'
import { RNCamera } from 'react-native-camera'
const { width, height } = Dimensions.get('window')


export default function Camera() {
    const [camera, setCamera] = useState < RNCamera | null > (null)
    const [selfie, setSelfie] = useState({})

    const takeSelfie = async () => {
        if (camera) {
            const options = {
                quality: 0.5,
                base64: true,
                orientation: RNCamera.Constants.Orientation.portrait,
                skipProcessing: false,
            }
            try {
                const data = await camera.takePictureAsync(options)
                setSelfie(data)
            } finally {
                setLoading(false)
            }
        }
    }
    
    return (
        <>
            <S.Header>
                <RNCamera
                    ref={refCamera => {
                        setCamera(refCamera)
                    }}
                    useCamera2Api
                    androidCameraPermissionOptions={{
                        title: 'Permissão de acesso',
                        message: 'Conceda permissão da sua camera para tirar a foto.',
                    }}
                    captureAudio={false}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    style={{
                        width: width,
                        height: '100%',
                        position: 'absolute',
                    }}
                    type={RNCamera.Constants.Type.front}
                />
                <TouchableOpacity
                    accessibilityLabel="Tirar foto"
                    onPress={() => { takeSelfie()
                    }}>

                    <S.Text>Camera</S.Text>
                </TouchableOpacity>



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
                                fontSize: 16,
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
                                                    : { style: { stroke: "red", strokeWidth: 50 } };
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
                </VictoryChart>
            </VictoryContainer>
        </>
    );

}