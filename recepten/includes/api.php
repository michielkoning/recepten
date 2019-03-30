<?php

function get_recipes( ) {

  $posts = get_posts(array(
    'post_type'   => 'recipe',
    'numberposts' => -1
  ));

  $recipes = [];

    foreach ($posts as $post) {
      $recipe =  new stdClass();
      $ingredients = explode(PHP_EOL, get_field('ingredients', $post->ID));

      $recipe->title = $post->post_title;
      $recipe->slug = $post->post_name;
      $recipe->content = $post->post_content;
      $recipe->ingredients = array();
      $recipe->image = get_the_post_thumbnail($post->ID);
      $recipe->source = get_field('source', $post->ID);
      $recipe->types = get_field('type', $post->ID);
      $recipe->preperation = get_field('preperation', $post->ID);
      $recipe->preparation_time = get_field('preparation_time', $post->ID);
      $recipe->content = apply_filters('the_content', $post->post_content);
      $recipe->title = $post->post_title;
      foreach ($ingredients as $ingredient) {
        $newIngredient =  new stdClass();
        preg_match_all('/[+-]?\d+(\.\d+)?/', $ingredient,  $matches);
        $amount = $matches[0][0];
        $newIngredient->amount =  floatval($amount);
        $newIngredient->singleAmount = floatval($amount) / 2;
        $newIngredient->title = str_replace($amount, '', $ingredient);
        $recipe->ingredients[] = $newIngredient;
      }
      $recipes[] = $recipe;
    }
    return $recipes;

}


// register the endpoint
add_action( 'rest_api_init', function () {
  register_rest_route( 'recipes/v1', '/all/', array(
    'methods' => 'GET',
    'callback' => 'get_recipes'
    )
  );

});
