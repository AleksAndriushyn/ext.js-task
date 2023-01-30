import React from 'react';

import {
	Button,
	Container,
	Datepickerfield,
	Fieldset,
	Formpanel,
	NumberField,
	Selectfield,
	Textfield,
	Toolbar,
} from '@sencha/ext-react-modern';

const FormPanel = ({ onSubmit }) => {
	return (
		<Container>
			<Formpanel ref={(form) => (this.form = form)} shadow padding='20'>
				<Fieldset
					ref='personal'
					title='Car Info'
					defaults={{ labelAlign: 'placeholder' }}>
					<NumberField decimals={2} label='Year of issue' width='150' />
					<Selectfield
						label='Brand'
						options={[
							{ text: 'Audi', value: 'audi' },
							{ text: 'BMW', value: 'bmw' },
							{ text: 'Ford', value: 'ford' },
							{ text: 'Honda', value: 'honda' },
							{ text: 'Hyundai', value: 'hyundai' },
							{ text: 'Kia', value: 'kia' },
							{ text: 'Mazda', value: 'mazda' },
							{ text: 'Mercedes-Benz', value: 'mercedes-benz' },
						]}
					/>
					<Textfield
						label='Model'
						placeholder='This field is required'
						required
					/>
					<Selectfield
						label='Color'
						options={[
							{ text: 'Red', value: 'red' },
							{ text: 'Green', value: 'green' },
							{ text: 'Blue', value: 'blue' },
							{ text: 'White', value: 'white' },
						]}
					/>
					<Textfield
						label="Owner's name"
						placeholder='This field is required'
						required
					/>
					<Datepickerfield label="Owner's date of birth" />
				</Fieldset>
				<Toolbar
					shadow={false}
					docked='bottom'
					layout={{ type: 'hbox', pack: 'right' }}>
					<Button text='Submit' handler={onSubmit} />
				</Toolbar>
			</Formpanel>
		</Container>
	);
};

export default FormPanel;
