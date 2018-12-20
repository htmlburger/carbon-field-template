const { Component } = window.cf.vendor['@wordpress/element'];

class YOURFIELDNAMEField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	handleChange = ( e ) => {
		const { id, onChange } = this.props;

		onChange( id, e.target.value );
	}

	/**
	 * Render a color input field.
	 *
	 * @return {React.Element}
	 */
	render() {
		const {
			id,
			name,
			value,
			field
		} = this.props;

		return (
			<input
				type="number"
				id={id}
				name={name}
				value={value}
				className="regular-text"
				max={field.max}
				min={field.min}
				step={field.step}
				onChange={this.handleChange} />
		);
	}
}

export default YOURFIELDNAMEField;

