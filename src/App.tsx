import { useState } from "react";
import { Select, SelectOption } from "./Select";

const options = [
	{ label: "First", value: 1 },
	{ label: "Second", value: 2 },
	{ label: "Three", value: 3 },
	{ label: "Fiour", value: 4 },
	{ label: "Five", value: 5 },
	{ label: "Six", value: 6 },
];

function App() {
	const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
	const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

	return (
		<>
			<label style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, display: 'block' }}>Multiple Select</label>
			<Select
				multiple
				options={options}
				value={value1}
				onChange={(o) => setValue1(o)}
			/>

			<br />

			<label style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, display: 'block' }}>Single Select</label>
			<Select
				options={options}
				value={value2}
				onChange={(o) => setValue2(o)}
			/>
		</>
	);
}

export default App;
