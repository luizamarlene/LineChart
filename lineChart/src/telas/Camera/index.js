import React, { useEffect, useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import * as S from "./styles";
const { width, height } = Dimensions.get('window')
import Torch from 'react-native-torch'
import { useNavigation } from "@react-navigation/native";


export default function Camera() {
    const navigation = useNavigation()

     /* const takeSelfie = async () => {
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
    }  */
    
    return (
        <>
            
                {/* <RNCamera
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
                        width: 200,
                        height: '100%',
                        position: 'absolute',
                    }}
                    type={RNCamera.Constants.Type.front}
                /> */}
            <TouchableOpacity
                style={{backgroundColor: 'green', alignSelf: 'center'}}
                    accessibilityLabel="Tirar foto"
                    onPress={() => { navigation.goBack()
                    }}>

                    <S.Text>Camera</S.Text>
                </TouchableOpacity>
        
            
        </>
    );

}