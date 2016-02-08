<?php

namespace Carbon_Fields\Field;

class FIELD_NAME_Field extends Field {
	/*
	 * Properties
	 */
	protected $example_property;

	/**
	 * to_json()
	 * 
	 * You can use this method to modify the field properties that are added to the JSON object.
	 * The JSON object is used by the Backbone Model and the Underscore template.
	 * 
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	function to_json( $load ) {
		$field_data = parent::to_json( $load ); // do not delete

		$field_data = array_merge( $field_data, array(
			'example_property' => $this->example_property,
		) );

		return $field_data;
	}

	/**
	 * template()
	 *
	 * Prints the main Underscore template
	 **/
	function template() {
		?>
		<input id="{{{ id }}}" type="text" name="{{{ name }}}" value="{{ value }}" class="regular-text" />

		<# if (example_property) { #>
			<p>This is an example.</p>
		<# } #>
		<?php
	}

	/**
	 * admin_enqueue_scripts()
	 * 
	 * This method is called in the admin_enqueue_scripts action. It is called once per field type.
	 * Use this method to enqueue CSS + JavaScript files.
	 * 
	 */
	function admin_enqueue_scripts() {
		$dir = plugin_dir_url( __FILE__ );

		# Enqueue JS
		wp_enqueue_script( 'carbon-field-FIELD_NAME', $dir . 'js/field.js', array( 'carbon-fields' ) );

		# Enqueue CSS
		wp_enqueue_style( 'carbon-field-FIELD_NAME', $dir . 'css/field.css' );
	}

	/**
	 * admin_init()
	 * 
	 * Called when the field is initialized. (back-end)
	 * 
	 */
	/*
	function admin_init() {
		// Add another Underscore template
		// $this->add_template( $this->get_type() . '-Description', array( $this, 'template_description' ) );

		parent::admin_init(); // do not delete
	}
	*/

	/**
	 * init()
	 * 
	 * Called when the field is initialized. (back-end, front-end)
	 * Useful for hooking up to front-end hooks. 
	 * 
	 */
	/*
	function init() {
		parent::init(); // do not delete
	}
	*/
}
