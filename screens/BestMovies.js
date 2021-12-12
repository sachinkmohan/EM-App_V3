import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Table, Row, Rows } from "react-native-table-component";

export default class BestMovies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tableHead: ["Name", "Year", "Genre"],
			tableData: [
				["Premam", "2015", "Romance/Drama"],
				["Ohm Shanthi Oshaana", "2014", "Romance/Comedy"],
				["Manichitrathazhu", "1993", "Horror/Musical"],
				["Salt N Pepper", "2011", "Romance/Drama"],
				["Drishyam", "2013", "Thriller/Drama"],
				["Kireedam", "1989", "Drama/Action"],
				["1983", "2014", "Sport/Drama"],
				["Ramji Rao Speaking", "1989", "Comedy/Drama"],
				["Nadodikkattu", "1987", "Comedy/Drama"],
				["Bangalore Days", "2014", "Romance/Drama"],
			],
		};
	}

	render() {
		const state = this.state;
		return (
			<ScrollView style={{ backgroundColor: "#fff" }}>
				<View style={styles.container}>
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
	text: { fontSize: 17, margin: 6 },
});
