<?php
/**
 * Plugin Name: Membership Plans Gutenberg Block
 * Plugin URI: https://github.com/amykapernick/membership-plans-wordpress-plugin
 * Version 1.0.0
 * Author: Amy Kapernick
 * Author URI: https://amyskapers.dev
 */

	if(! defined('ABSPATH')) {
		exit;
	}

	require_once(__DIR__ . '/src/blocks/plans/index.php');
	require_once(__DIR__ . '/src/functions/plans_custom_post.php');

	add_action('enqueue_block_editor_assets', 'gutenberg_block_styles');

	add_action('wp_enqueue_scripts', 'gutenberg_block_styles');

	function gutenberg_block_styles() {
		wp_enqueue_style('custom_gutenberg', plugins_url('/build/css/styles.css', __FILE__), false);
	};

?>