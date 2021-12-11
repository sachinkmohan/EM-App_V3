import React from "react";

import { View, Text, Button, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ConfusedLetters = ({ navigation }) => {
	return (
		<ScrollView>
			<View style={styles.movetoCenter}>
				<Text style={styles.boldtext}>Most Confused Letters</Text>
				<Text style={styles.text}>
					{"\n"} -First one is ല and ള {"\n"}
				</Text>
				<Text></Text>
				<Image
					source={require("../assets/images/shabdam/laSounds.jpeg")}
					style={{ height: 300, width: 260, paddingLeft: 50 }}
				/>
				<Text style={styles.text}>
					{"\n"}- Second one is ര and റ {"\n"}
				</Text>
				<Text>
					Ra or ര is made by touching the tip of the tongue to the hard pallette
					just behind the teeth creating a soft sound whereas Ra or റ is similar
					to rolling R sound which is made by vibrating the tongue behind the
					teeth similar to Arabic & Spanish.
				</Text>
				<Image
					source={require("../assets/images/shabdam/raSounds.jpeg")}
					style={{ height: 300, width: 260, paddingLeft: 50 }}
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
export default ConfusedLetters;
