/**
 * External dependencies.
 */
import { registerFieldType } from '@carbon-fields/core';

/**
 * Internal dependencies.
 */
import './style.scss';
import YourFieldNameField from './main';

registerFieldType( 'yourfieldname', YourFieldNameField );
