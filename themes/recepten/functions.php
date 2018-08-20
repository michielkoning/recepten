<?php

require_once( __DIR__ . '/includes/admin-menu.php');
require_once( __DIR__ . '/includes/custom-posts.php');
require_once( __DIR__ . '/includes/acf.php');

function get_recipe( $request_data ) {

  // setup query argument
  $args = array(
    'post_type' => 'recipe',
  );

  // get posts
  $post = get_page_by_path($request_data['slug'], OBJECT, 'recipe');
  $recipe = new stdClass();
  if ($post) {
    $ingredients = explode('<br />', get_field('ingredients', $post->ID));
    $recipe->ingredients = array();
    foreach ($ingredients as $ingredient) {
      $newIngredient = new stdClass();
      $newIngredient->title = $ingredient;
      $newIngredient->amount = (float) filter_var( $ingredient, FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION );
      $recipe->ingredients[] = $newIngredient;
    }
    $recipe->image = get_the_post_thumbnail($post->ID);
    $recipe->source = get_field('source', $post->ID);
    $recipe->types = get_field('type', $post->ID);
    $recipe->preperation = get_field('preperation', $post->ID);
    $recipe->preparation_time = get_field('preparation_time', $post->ID);
    $recipe->content = apply_filters('the_content', $post->post_content);
    $recipe->title = $post->post_title;
  }
  return $recipe;
}

// register the endpoint
add_action( 'rest_api_init', function () {
  register_rest_route( 'recipes/v1', '/recipe/', array(
    'methods' => 'GET',
    'callback' => 'get_recipe',
      'args' => array(
        'slug'
      ),
    )
  );
});