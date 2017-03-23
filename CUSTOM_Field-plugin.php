<?php
/*
Plugin Name: Carbon Field: CUSTOM Field
Description: Extends the base Carbon Fields with a CUSTOM field type.
Version: 1.0.0
*/

define( 'Carbon_Field_CUSTOM\\DIR', __DIR__ );

$dir = __DIR__ . '/languages/';
$locale = get_locale();
$path = $dir . $locale . '.mo';
load_textdomain( 'carbon-field-CUSTOM', $path );

/**
 * Hook field initialization
 */
add_action( 'after_setup_theme', 'crb_init_carbon_field_CUSTOM', 15 );
function crb_init_carbon_field_CUSTOM() {
	if ( class_exists( 'Carbon_Fields\\Field\\Field' ) ) {
		include_once dirname(__FILE__) . '/core/CUSTOM_Field.php';
	}
}
