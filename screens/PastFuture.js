import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Table, Row, Rows } from "react-native-table-component";

import { dstyles } from "../styles/DefaultStyle";

export default class PastFuture extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tableHead: ["Past", "Infinitive", "Future"],
			tableData: [
				["ചിരിച്ചു", "ചിരിക്കുക", "ചിരിക്കും"],
				["കരഞ്ഞു", "കരയുക", "കരയും"],
				["ചോദിച്ചു", "ചോദിക്കുക", "ചോദിക്കും"],
				["പോയി", "പോവുക", "പോവും"],
				["പറഞ്ഞു", "പറയുക", "പറയും"],
				["വന്നു", "വരുക", "വരും"],
				["കേട്ടു", "കേൾക്കുക", "കേൾക്കും"],
				["കളിച്ചു", "കളിക്കുക", "കളിക്കും"],
				["എഴുതി", "എഴുതുക", "എഴുത്തും"],
				["പഠിച്ചു", "പഠിക്കുക", "പഠിക്കും"],
			],
		};
	}

	render() {
		const state = this.state;
		return (
			<ScrollView style={{ backgroundColor: "#fff" }}>
				<View style={styles.container}>
					<Text style={dstyles.text}>
						The table below describes the past and future tense of the most
						commonly used verbs in everyday conversational Malayalam.
					</Text>
					<Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
						<Row
							data={state.tableHead}
							style={styles.head}
							textStyle={styles.text}
						/>
						<Rows data={state.tableData} textStyle={styles.text} />
					</Table>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
	head: { height: 40, backgroundColor: "#f1f8ff" },
	text: { fontSize: 18, margin: 6 },
});
