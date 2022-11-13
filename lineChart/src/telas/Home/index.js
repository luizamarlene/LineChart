import React from "react";
import { StyleSheet, View, Text} from "react-native";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";

const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 }
];

export default function Home() {

    return (
        <View style={styles.container}>
            <Text>Livros</Text>
            <VictoryChart
                theme={VictoryTheme.material}
            >
                <VictoryLine
                    horizontal={true}
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc" },
                        labels: {
                            fill: '#red',
                        }
                    }}
                    data={data}
                />
            </VictoryChart>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff"
    }
});
