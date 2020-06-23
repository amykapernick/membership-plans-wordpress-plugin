<?php

function create_post_type() {
	register_post_type('plans', 
		array(
			'labels' => array(
				'name' => 'Membership Plans',
				'singular_name' => 'Membership Plan'
			),
			'public' => true,
			'show_in_rest' => true,
		)
	);
};

add_action('init', 'create_post_type');

/*
* Disable Gutenberg for Custom Letter Post Type
*/

add_filter('use_block_editor_for_post_type', 'prefix_disable_gutenberg', 10, 2);

function prefix_disable_gutenberg($current_status, $post_type) {
	if ($post_type === 'plans') return false;
	return $current_status;
}

?>