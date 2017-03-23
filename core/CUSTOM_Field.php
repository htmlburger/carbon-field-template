<?php

namespace Carbon_Fields\Field;

class CUSTOM_Field extends Field {
	/*
	 * Properties
	 */
	protected $example_property;

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load ); // do not delete

		$field_data = array_merge( $field_data, array(
			'example_property' => $this->example_property,
		) );

		return $field_data;
	}

	/**
	 * Enqueue admin scripts.
	 * Called once per field type.
	 */
	public static function admin_enqueue_scripts() {
		$template_dir = get_template_directory_uri();

		// Get the current url for the carbon-fields-number, regardless of the location
		$template_dir .= str_replace( wp_normalize_path( get_template_directory() ), '', wp_normalize_path( __DIR__ ) );

		# Enqueue JS
		wp_enqueue_script( 'carbon-field-FIELD_NAME', $template_dir . '/assets/js/bundle.js', array( 'carbon-fields-bootstrap' ) );

		# Enqueue CSS
		# wp_enqueue_style( 'carbon-field-FIELD_NAME', $template_dir . '/assets/css/field.css' );
	}
}
