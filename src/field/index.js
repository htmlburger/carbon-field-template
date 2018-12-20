const wp = {
	element: window.cf.vendor['@wordpress/element']
};

class YOURFIELDNAMEField extends wp.element.Component {
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
			value
		} = this.props;
		const { handleChange } = this;

		return (
			<div>
				<input
					type="text"
					className="regular-text"
					id={ id }
					name={ name }
					value={ value }
					onChange={ handleChange }
				/>
			</div>
		);
	}
}

export default YOURFIELDNAMEField;
