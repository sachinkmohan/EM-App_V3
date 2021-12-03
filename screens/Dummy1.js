import React from "react";

import { View, Text, Button } from "react-native";

const Dummy1 = ({ navigation }) => {
	return (
		<View>
			<Text>This is Dummy1 Screen</Text>
			<Button
				title="Take me to Dummy 2"
				onPress={() => navigation.navigate("DummyTwo")}
			/>
		</View>
	);
};

export default Dummy1;
