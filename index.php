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

?>