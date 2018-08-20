<?php
function register_custom_posts() {

  $labels_recipes = array(
    'name'               => 'Recepten',
    'singular_name'      => 'Recept',
    'add_new'            => 'Nieuw recept',
    'add_new_item'       => 'Nieuw recept toevoegen',
    'edit_item'          => 'Recept bewerken',
    'new_item'           => 'Nieuw recept',
    'view_item'          => 'Recept bekijken',
    'search_items'       => 'Zoeken in recepten',
    'not_found'          => 'Geen recept gevonden',
    'not_found_in_trash' => 'Geen recept gevonden in de prullenbak',
    'parent_item_colon'  => 'Bovenliggende recept:',
    'menu_name'          => 'Recepten'
  );

  register_post_type(
    'recipe', array(
      'labels'               => $labels_recipes,
      'menu_icon'            => 'dashicons-carrot',
      'hierarchical'         => false,
      'description'          => 'Recepten',
      'supports'             => array( 'title', 'editor', 'thumbnail'),
      'public'               => true,
      'show_ui'              => true,
      'show_in_menu'         => true,
      'menu_position'        => 25,
      'show_in_nav_menus'    => true,
      'publicly_queryable'   => true,
      'exclude_from_search'  => false,
      'has_archive'          => true,
      'query_var'            => true,
      'can_export'           => true,
      'rewrite'              => array( 'slug' => 'recepten'),
      'capability_type'      => 'post',
      'show_in_rest'       => true,
    'rest_base'          => 'recipes',
    'rest_controller_class' => 'WP_REST_Posts_Controller',

    )
  );

  register_taxonomy(
    'tag',
    'recipe',
    array(
      'hierarchical'      => false,
      'labels'            => $labels_sources,
      'label'             => 'Tags',
      'show_admin_column' => true,
      'rewrite'           => false,
      'publicly_queryable' => true,
      'query_var' => 'services'
    )
  );

  // register_taxonomy(
  //   'service',
  //   'room',
  //   array(
  //     'hierarchical'      => false,
  //     'labels'            => $labels_sources,
  //     'label'             => 'Voorzieningen',
  //     'show_admin_column' => true,
  //     'rewrite'           => false,
  //     'publicly_queryable' => true,
  //     'query_var' => 'services'
  //   )
  // );

  // $labels_rooms = array(
  //   'name'               => 'Kamers',
  //   'singular_name'      => 'Kamer',
  //   'add_new'            => 'Nieuwe kamer',
  //   'add_new_item'       => 'Nieuwe kamer toevoegen',
  //   'edit_item'          => 'Kamer bewerken',
  //   'new_item'           => 'Nieuwe kamer',
  //   'view_item'          => 'Kamer bekijken',
  //   'search_items'       => 'Zoeken in kamers',
  //   'not_found'          => 'Geen kamer gevonden',
  //   'not_found_in_trash' => 'Geen kamer gevonden in de prullenbak',
  //   'parent_item_colon'  => 'Bovenliggende kamer:',
  //   'menu_name'          => 'Kamers'
  // );

  // register_taxonomy(
  //   'service',
  //   'room',
  //   array(
  //     'hierarchical'      => false,
  //     'labels'            => $labels_sources,
  //     'label'             => 'Voorzieningen',
  //     'show_admin_column' => true,
  //     'rewrite'           => false,
  //     'publicly_queryable' => true,
  //     'query_var' => 'services'
  //   )
  // );
}

add_action( 'init', 'register_custom_posts', 0 );
flush_rewrite_rules();

