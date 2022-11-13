import React from "react";
import {Text, Dimensions } from "react-native";
import { VictoryLine, VictoryChart, VictoryTooltip, VictoryContainer, VictoryAxis } from "victory-native";
import * as S from "./styles";

const { width, height } = Dimensions.get('window')
console.log(width)
const data = [
    { x: 'Janeiro', y: 20 },
    { x: 'Fevereiro', y: 19 },
    { x: 'Março', y: 17 },
    { x: 'Abril', y: 19 },
    { x: 'Maio', y: 16 },
    { x: 'Junho', y: 20 },
    { x: 'Julho', y: 27 },
    { x: 'Agosto', y: 28 },
    { x: 'Setembro', y: 30 },
    { x: 'Outubro', y: 36 },
    { x: 'Dezembro', y: 35 }
];
const data1 = [
    { x: 'Janeiro', y: 10 },
    { x: 'Fevereiro', y: 10 },
    { x: 'Março', y: 10 },
    { x: 'Abril', y: 19 },
    { x: 'Maio', y: 16 },
    { x: 'Junho', y: 20 },
    { x: 'Julho', y: 27 },
    { x: 'Agosto', y: 28 },
    { x: 'Setembro', y: 30 },
    { x: 'Outubro', y: 36 },
    { x: 'Dezembro', y: 35 }
];

export default function Home() {

    return (
        <VictoryContainer
            style={{ backgroundColor: "#000" }}
            width={width}
            height={height}
        >
            <VictoryChart
                horizontal={false}
                style={{
                    axis: { stroke: '#fff', strokeWidth: 5, color: 'red' },
                    ticks: { stroke: '#fff', strokeWidth: 5 },
                    tickLabels: {
                        fill: 'red',
                    }
                }}
            >
                <VictoryAxis
                    scale="time"
                    standalone={false}
                    tickValues={data}    
                    style={{
                        axis: { stroke: '#fff', strokeWidth: 2 },
                        ticks: { stroke: '#fff', strokeWidth: 1 },
                        tickLabels: {
                            fill: '#fff',
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
                        },
                    }}
                    
                />
                <VictoryLine
                    labelComponent={<VictoryTooltip />}
                    animate={{ easing: "bounce" }}
                    data={data}
                    style={{
                        data: { stroke: "green", strokeWidth: 4 }
                    }}

                />
                {/* <VictoryLine
                    labelComponent={<VictoryTooltip />}
                    padding={20}
                    
                    horizontal={false}
                    animate={{ easing: "bounce" }}
                    style={{
                        data: { stroke: "red" },
                        parent: { border: "1px solid #fff" },
                         margin: '10',
                    }}
                    data={data1}
                /> */}
            </VictoryChart>
        </VictoryContainer>
    );

}