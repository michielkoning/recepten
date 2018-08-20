<?php
if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
  'key' => 'group_5ac20d4db53cf',
  'title' => 'Recepten info',
  'fields' => array(
    array(
      'key' => 'field_5ac20d58163e3',
      'label' => 'Bereidingstijd',
      'name' => 'preparation_time',
      'type' => 'number',
      'instructions' => 'in minuten',
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'default_value' => '',
      'placeholder' => '',
      'prepend' => '',
      'append' => '',
      'min' => '',
      'max' => '',
      'step' => '',
    ),
    array(
      'key' => 'field_5ac20daec5f69',
      'label' => 'Type',
      'name' => 'type',
      'type' => 'checkbox',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'choices' => array(
        'Ontbijt' => 'Ontbijt',
        'Lunch' => 'Lunch',
        'Voorgerecht' => 'Voorgerecht',
        'Diner' => 'Diner',
        'Dessert' => 'Dessert',
      ),
      'allow_custom' => 0,
      'save_custom' => 0,
      'default_value' => array(
      ),
      'layout' => 'vertical',
      'toggle' => 0,
      'return_format' => 'value',
    ),
    array(
      'key' => 'field_5ac21840fa230',
      'label' => 'Bron',
      'name' => 'source',
      'type' => 'url',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'default_value' => '',
      'placeholder' => '',
    ),
  ),
  'location' => array(
    array(
      array(
        'param' => 'post_type',
        'operator' => '==',
        'value' => 'recipe',
      ),
    ),
  ),
  'menu_order' => 0,
  'position' => 'side',
  'style' => 'default',
  'label_placement' => 'top',
  'instruction_placement' => 'label',
  'hide_on_screen' => '',
  'active' => 1,
  'description' => '',
));

acf_add_local_field_group(array(
  'key' => 'group_5ac20b41d7563',
  'title' => 'Ingrediënten',
  'fields' => array(
    array(
      'key' => 'field_5ac20b8aeab61',
      'label' => 'Ingrediënten',
      'name' => 'ingredients',
      'type' => 'textarea',
      'instructions' => '',
      'required' => 1,
      'conditional_logic' => 0,
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'default_value' => '',
      'placeholder' => '',
      'maxlength' => '',
      'rows' => '',
      'new_lines' => 'br',
    ),
  ),
  'location' => array(
    array(
      array(
        'param' => 'post_type',
        'operator' => '==',
        'value' => 'recipe',
      ),
    ),
  ),
  'menu_order' => 1,
  'position' => 'acf_after_title',
  'style' => 'seamless',
  'label_placement' => 'top',
  'instruction_placement' => 'label',
  'hide_on_screen' => '',
  'active' => 1,
  'description' => '',
));

acf_add_local_field_group(array(
  'key' => 'group_5ac21dbc52698',
  'title' => 'Voorbereiding',
  'fields' => array(
    array(
      'key' => 'field_5ac21dc1f095b',
      'label' => 'Voorbereiding',
      'name' => 'preperation',
      'type' => 'textarea',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'default_value' => '',
      'placeholder' => '',
      'maxlength' => '',
      'rows' => 3,
      'new_lines' => '',
    ),
  ),
  'location' => array(
    array(
      array(
        'param' => 'post_type',
        'operator' => '==',
        'value' => 'recipe',
      ),
    ),
  ),
  'menu_order' => 5,
  'position' => 'acf_after_title',
  'style' => 'seamless',
  'label_placement' => 'top',
  'instruction_placement' => 'label',
  'hide_on_screen' => '',
  'active' => 1,
  'description' => '',
));

endif;