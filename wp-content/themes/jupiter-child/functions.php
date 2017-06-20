<?php

// Remove admin bar on front-end
add_filter('show_admin_bar', '__return_false');

// Add custom fonts
add_action( 'wp_enqueue_scripts','add_myfonts');
function add_myfonts() {
    wp_enqueue_style( 'my-fonts', '/wp-content/themes/jupiter-child/fontface/graphic/graphic.css', false, '', '');
}

/*
 * Function creates post duplicate as a draft and redirects then to the edit post screen
 */
function rd_duplicate_post_as_draft(){
    global $wpdb;
    if (! ( isset( $_GET['post']) || isset( $_POST['post'])  || ( isset($_REQUEST['action']) && 'rd_duplicate_post_as_draft' == $_REQUEST['action'] ) ) ) {
        wp_die('No post to duplicate has been supplied!');
    }
 
    $post_id = (isset($_GET['post']) ? $_GET['post'] : $_POST['post']);
    $post = get_post($post_id);
    $current_user = wp_get_current_user();
    $new_post_author = $current_user->ID;

    if (isset($post) && $post != null) {

        $args = array(
            'comment_status' => $post->comment_status,
            'ping_status'    => $post->ping_status,
            'post_author'    => $new_post_author,
            'post_content'   => $post->post_content,
            'post_excerpt'   => $post->post_excerpt,
            'post_name'      => $post->post_name,
            'post_parent'    => $post->post_parent,
            'post_password'  => $post->post_password,
            'post_status'    => 'draft',
            'post_title'     => $post->post_title,
            'post_type'      => $post->post_type,
            'to_ping'        => $post->to_ping,
            'menu_order'     => $post->menu_order
        );
 
        $new_post_id = wp_insert_post($args);

        $taxonomies = get_object_taxonomies($post->post_type); // returns array of taxonomy names for post type, ex array("category", "post_tag");
        foreach ($taxonomies as $taxonomy) {
            $post_terms = wp_get_object_terms($post_id, $taxonomy, array('fields' => 'slugs'));
            wp_set_object_terms($new_post_id, $post_terms, $taxonomy, false);
        }

        $post_meta_infos = $wpdb->get_results("SELECT meta_key, meta_value FROM $wpdb->postmeta WHERE post_id=$post_id");
        if (count($post_meta_infos)!=0) {
            $sql_query = "INSERT INTO $wpdb->postmeta (post_id, meta_key, meta_value) ";
            foreach ($post_meta_infos as $meta_info) {
                $meta_key = $meta_info->meta_key;
                $meta_value = addslashes($meta_info->meta_value);
                $sql_query_sel[]= "SELECT $new_post_id, '$meta_key', '$meta_value'";
            }
            $sql_query.= implode(" UNION ALL ", $sql_query_sel);
            $wpdb->query($sql_query);
        }

        wp_redirect( admin_url( 'post.php?action=edit&post=' . $new_post_id ) );
        exit;
    } else {
        wp_die('Post creation failed, could not find original post: ' . $post_id);
    }
}
add_action( 'admin_action_rd_duplicate_post_as_draft', 'rd_duplicate_post_as_draft' );
 
function rd_duplicate_post_link( $actions, $post ) {
    if (current_user_can('edit_posts')) {
        $actions['duplicate'] = '<a href="admin.php?action=rd_duplicate_post_as_draft&amp;post=' . $post->ID . '" title="Duplicate this item" rel="permalink">Duplicate</a>';
    }
    return $actions;
}
 
add_filter( 'page_row_actions', 'rd_duplicate_post_link', 10, 2 );
add_filter( 'post_row_actions', 'rd_duplicate_post_link', 10, 2 );


global $wpdb;
// Save reg details
add_action( 'wpcf7_before_send_mail', 'submit_db' );
function submit_db ($cf7) {

	global $wpdb;

	$submission = WPCF7_Submission::get_instance();
	if ($submission) {
		$data = array();
		$data['posted_data'] = $submission->get_posted_data();
	}

	if ($data['posted_data']["reg"]) {
		$wpdb->insert(
				'registrations',
				array(
					'firstname' => @esc_sql(strip_tags($data['posted_data']["first-name"])),
					'lastname' => @esc_sql(strip_tags($data['posted_data']["last-name"])),
					'email' => @esc_sql(strip_tags($data['posted_data']["email"])),
					'mobile' => @esc_sql(strip_tags($data['posted_data']["mobile"])),
					'address' => @esc_sql(strip_tags($data['posted_data']["address"])),
					'postcode' => @esc_sql(strip_tags($data['posted_data']["postcode"])),
					'dob' => @esc_sql(strip_tags($data['posted_data']["dob"])),
					'location' => @esc_sql(strip_tags($data['posted_data']["location"])),
					'reg' => @esc_sql(strip_tags($data['posted_data']["reg"])),
					'service' => @esc_sql(strip_tags($data['posted_data']["service"])),
					'ip' => $_SERVER['REMOTE_ADDR'],
				)
		);
	}
	return true;
}

// Fetch reg details
if (isset($_GET['reg'])) {
	$query = "SELECT * FROM registrations WHERE reg = '%s' ORDER BY date DESC LIMIT 1";
	$results = $wpdb->get_results(sprintf($query, esc_sql($_GET['reg'])));
	echo json_encode($results[0]);
	exit;
}
// the _3 prefix has to match the id of the form you have created
add_action( "gform_after_submission_2", "login_form_after_submission", 10, 2 );

function login_form_after_submission($entry, $form) {

	// get the username and pass
	$username = $entry[1];
	$pass = $entry[2];

	$creds = array();

	// create the credentials array
	$creds['user_login'] = $username;
	$creds['user_password'] = $pass;

	// sign in the user and set him as the logged in user
	$sign = wp_signon( $creds );
	wp_set_current_user( $sign->ID );
}
// the _3 prefix has to match the id of the form you have created
add_filter( "gform_field_validation_2", "login_validate_field", 10, 4 );

//to do a redirect after password reset

function wpse_lost_password_redirect() {

    // Check if have submitted 
    $confirm = ( isset($_GET['checkemail'] ) ? $_GET['checkemail'] : '' );

    if( $confirm ) {
        wp_redirect( '/book-car-wash/' ); 
        exit;
    }
}
add_action('login_headerurl', 'wpse_lost_password_redirect');

//end of password reset code
function login_validate_field($result, $value, $form, $field) {

	// make sure this variable is global
	// this function is fired via recurrence for each field, s
	global $user;

	// validate username
	if ( $field['cssClass'] === 'username' ) {
		$user = get_user_by( 'login', $value );

		if ( empty( $user->user_login ) ) {
			$result["is_valid"] = false;
			$result["message"] = "Invalid username provided.";
		}
	}

	// validate pass
	if ( $field['cssClass'] === 'password' ) {
		if ( !$user or !wp_check_password( $value, $user->data->user_pass, $user->ID ) ) {
			$result["is_valid"] = false;
			$result["message"] = "Invalid password provided.";
		}
	}

	return $result;
}
/**
* Skip Registration for Logged In Users
* http://gravitywiz.com/2012/04/24/skip-user-registration-for-logged-in-users/
*
*
* add_action('gform_post_submission', 'maybe_skip_registration', 9);
* add_action('gform_after_submission', 'maybe_skip_registration', 9);
* function maybe_skip_registration($entry) {
 *   
 *   if(is_user_logged_in()) {
 *       remove_action('gform_post_submission', array('GFUser', 'gf_create_user'));
 *       remove_action('gform_after_submission', array('GFUser', 'gf_create_user'));
 *   }
 *   
*}
*/
add_filter('gform_validation', 'maybe_skip_validation', 9);
function maybe_skip_validation($validation_result) {
    if(is_user_logged_in()) {
        remove_filter('gform_validation', array('GFUser', 'user_registration_validation'));
    }
    return $validation_result;
}
/* Custom code goes below this line. */
add_filter("gform_enable_field_label_visibility_settings", "__return_true");
add_filter( 'gform_submit_button_5', '__return_false' );
add_filter( 'gform_submit_button_6', '__return_false' );
add_filter( 'gform_submit_button_7', '__return_false' );
add_filter( 'gform_submit_button_8', '__return_false' );
add_filter( 'gform_submit_button_9', '__return_false' );
add_filter( 'gform_submit_button_10', '__return_false' );
add_filter( 'gform_submit_button_11', '__return_false' );
add_filter( 'gform_submit_button_12', '__return_false' );

wp_enqueue_script('fetchReg','/wp-content/themes/jupiter-child/js/reglookup.js',array('jquery'),'1.0.0');
