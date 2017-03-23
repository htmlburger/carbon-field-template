# Creating a new Carbon Field

Step-by-step guide on how to create a new Carbon Field.

## Introduction

The [Carbon Fields](https://github.com/htmlburger/carbon-fields) library has many built-in fields, but you may find it necessary to define a new type of field for your specific project needs.

The following tutorial will explain how to create a custom Carbon Field.

### Step 1: Download the template

To make it as easy as possible, we have prepared a Carbon Field template, which is a WP plugin that contains a frame for the PHP Carbon Field class and the React structure.

You can download the template from here: https://github.com/htmlburger/carbon-field-template

Template Structure

- `/css` - css folder
- `/images` - images folder
- `/js` - JavaScript built files folder
- `/languages` - folder for .po, .mo and .pot files
- `/src` - JavaScript files folder
- `FIELD_NAME_Field-plugin.php` - main plugin file
- `FIELD_NAME_Field.php` - Carbon Field class file

### Step 2: Webpack configuration

Open `webpack.config.js` and make sure that the `root` variable is set to point to the location of the Carbon Fields library.

### Step 3: Name your field

Replace the FIELD_NAME placeholder in the template files with the name of your custom field. Also rename the PHP files.

**NB!** If your field name contains multiple words, for example Image Gallery, your class names should look like this:

* **PHP class:** `Image_Gallery_Field`
* **JS src/bootstrap.js:** `ImageGallery`
* **JS src/components/field.js:** `ImageGallery`

### Step 4: Customize

Here is a quick overview of some of the methods you can customize:

#### PHP

`to_json()`

You can use this method to modify the field properties that are added to the JSON object.

The JSON object is used by React when rendering the field.

`admin_enqueue_scripts()`

Used to enqueue CSS/JavaScript files.

`admin_init()`

Called for each field instance when the field is initialized. (back-end)

`init()`

Called for each field instance when the field is initialized. (back-end, front-end)

### Step 5: Building

In order to build the JS, run `npm run dev` or `yarn dev`.
