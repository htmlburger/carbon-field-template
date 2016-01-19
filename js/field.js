window.carbon = window.carbon || {};

(function($) {

	var carbon = window.carbon;

	if (typeof carbon.fields === 'undefined') {
		return false;
	}

	/*
	|--------------------------------------------------------------------------
	| FIELD_NAME Field MODEL
	|--------------------------------------------------------------------------
	|
	| This class represents the model for the field.
	|
	| A model is responsible for holding the fields current state (data).
	| It also has all the logic surrounding the data management, like: 
	|  - conversion
	|  - validation
	|  - access control
	|
	*/
	carbon.fields.Model.FIELD_NAME = carbon.fields.Model.extend({
		/*
		// Set some default values if need. They will be stored in the model attributes.
		defaults: {
			'options': []
		},
		*/

		initialize: function() {
			carbon.fields.Model.prototype.initialize.apply(this);  // do not delete

			// Model data manipulations can be done here. For example:

			/*
			var _this = this;
			var value = this.get('value');
			var options = this.get('options') || [];

			// If no value, set the first option as value
			if (!value) {
				_.each(options, function(option) {
					_this.set('value', option.value);
					return false;
				});
			}
			*/

		},

		/*
		 * The validate method is an internal Backbone method.
		 * It will check if the field model data is valid.
		 * 
		 * @see http://backbonejs.org/#Model-validate
		 */
		/*
		validate: function(attrs, options) {
			var hasErrors = false;

			if (!attrs.value) {
				hasErrors = true;
			}

			return hasErrors;
		}
		*/
	});


	/*
	|--------------------------------------------------------------------------
	| FIELD_NAME Field VIEW
	|--------------------------------------------------------------------------
	|
	| Holds the field DOM interactions (rendering, error state, etc..).
	| The field view also SYNCs the user entered data with the model.
	|
	| Views reflect what the applications data models look like.
	| They also listen to events and react accordingly.
	|
	| @element: .[id]
	| @holder:  carbon.views[id]
	|
	*/
	carbon.fields.View.FIELD_NAME = carbon.fields.View.extend({
		/*
		// Add the events from the parent view and also include new ones
		events: function() {
			return _.extend({}, carbon.fields.View.prototype.events, {
				'change input.example-field': 'sync',
			});
		},
		*/

		initialize: function() {
			// Initialize the parent view
			carbon.fields.View.prototype.initialize.apply(this); // do not delete

			// Listen for changes on the model and modify the DOM
			// this.listenTo(this.model, 'change:example_property', this.handleChange);

			// Wait for the field to be added to the DOM and run an init method
			this.on('field:rendered', this.initField);
		},

		/*
		 * Initialize the code responsible for the DOM manipulations
		 */
		initField: function() {
			// Add your logic here
		},

		/*
		 * Syncs the user entered value with the model. 
		 * By default this method is fired when the input value has changed.
		 *
		 * If the field has more then one input, this method should be overwritten!
		 */
		/*
		sync: function(event) {
			var $input = this.$el.find('input.example-field');
			var value = $input.val();

			this.model.set('value', value);
		},
		*/
	});

}(jQuery));