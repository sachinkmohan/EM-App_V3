import React from "react";

import { View, Text, Button, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const MUsedGrammar = ({ navigation }) => {
	return (
		<ScrollView>
			<View style={styles.movetoCenter}>
				<Text style={styles.boldtext}>Most Used Grammar</Text>
				<Text style={styles.text}>
					{"\n"} Ways to say no in Malayalam {"\n"}
				</Text>
				<Image
					source={require("../assets/images/grammar/saying-no.jpeg")}
					style={{ height: 320, width: 300, paddingLeft: 50 }}
				/>
				<Text style={styles.text}>
					{"\n"} Enikku and Njan - The Difference {"\n"}
				</Text>
				<Image
					source={require("../assets/images/grammar/enikku-njan.jpeg")}
					style={{ height: 320, width: 260, paddingLeft: 50 }}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	boldtext: {
		fontWeight: "bold",
		paddingLeft: 10,
		fontSize: 20,
	},
	text: {
		paddingLeft: 15,
		fontSize: 20,
		color: "#0000ff",
	},
	movetoCenter: {
		justifyContent: "center",
		alignItems: "center",
	},
});
export default MUsedGrammar;
