<?php

use Carbon_Fields\Carbon_Fields;
use Carbon_Field_YOURFIELDNAME\YOURFIELDNAME_Field;

define( 'Carbon_Field_YOURFIELDNAME\\DIR', __DIR__ );

Carbon_Fields::extend( YOURFIELDNAME_Field::class, function( $container ) {
	return new YOURFIELDNAME_Field(
		$container['arguments']['type'],
		$container['arguments']['name'],
		$container['arguments']['label']
	);
} );
