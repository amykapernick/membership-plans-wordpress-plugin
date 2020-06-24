<?php

/**
 * Plans Block
 */

 if(! defined('ABSPATH')) {
	 exit;
 }

 function plans_register_block() {
	 wp_register_script(
		 'plans/editor-scripts',
		 plugins_url('/../../../build/index.js', __FILE__),
		 ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components']
	 );

	 wp_enqueue_script( 'toggle-plans', plugins_url('../../js/togglePlans.js', __FILE__));

	 register_block_type('membership/plans', array(
		 'editor_script' => 'plans/editor-scripts'
	 ));
 };

 add_action('init', 'plans_register_block');

?>