import { ExtColumn, ExtGrid } from '@sencha/ext-react-modern';
import React, { useState } from 'react';
import FormPanel from './form';

const App = () => {
	const [data, setData] = useState([]);

	const onSubmit = (formData) => {
		data.push(formData);
		setData(data);
	};

	return (
		<>
			<FormPanel onSubmit={onSubmit} />
			<ExtGrid
				viewport={true}
				ref={(grid) => (this.grid = grid)}
				title='Car data'
				store={data}>
				<ExtColumn editable text='Year of issue' dataIndex='year'></ExtColumn>
				<ExtColumn editable text='Brand' dataIndex='brand'></ExtColumn>
				<ExtColumn editable text='Model' dataIndex='model'></ExtColumn>
				<ExtColumn editable text='Color' dataIndex='color'></ExtColumn>
				<ExtColumn editable text='name' dataIndex='Name'></ExtColumn>
				<ExtColumn editable text='date' dataIndex='Date'></ExtColumn>
			</ExtGrid>
		</>
	);
};

export default App;

