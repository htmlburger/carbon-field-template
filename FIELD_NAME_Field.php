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
	 * The JSON object is used by React when rendering the field.
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
	 * admin_enqueue_scripts()
	 *
	 * This method is called in the admin_enqueue_scripts action. It is called once per field type.
	 * Use this method to enqueue CSS + JavaScript files.
	 *
	 */
	public static function admin_enqueue_scripts() {
		$template_dir = get_template_directory_uri();

		// Get the current url for the carbon-fields-number, regardless of the location
		$template_dir .= str_replace( wp_normalize_path( get_template_directory() ), '', wp_normalize_path( __DIR__ ) );

		# Enqueue JS
		crb_enqueue_script( 'carbon-field-FIELD_NAME', $template_dir . '/js/bundle.js', array( 'carbon-bootstrap' ) );

		# Enqueue CSS
		crb_enqueue_style( 'carbon-field-FIELD_NAME', $template_dir . '/css/field.css' );
	}

	/**
	 * admin_init()
	 *
	 * Called when the field is initialized. (back-end)
	 *
	 */
	/*
	public function admin_init() {
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
	public function init() {
		parent::init(); // do not delete
	}
	*/
}
