<?php
global $post,
$mk_options;

$single_layout = get_post_meta( $post->ID, '_layout', true );
$padding = get_post_meta( $post->ID, '_padding', true );

if ( $single_layout == 'default' || empty( $single_layout ) ) {
	$single_layout = $mk_options['portfolio_single_layout'];
}


/*
Image dimensions
*/
$image_height = $mk_options['Portfolio_single_image_height'];
$image_width = mk_content_width($single_layout);

$padding = ($padding == 'true') ? 'no-padding' : '';




get_header();




if ( have_posts() ) while ( have_posts() ) : the_post(); ?>




<div id="theme-page">

	<?php
		$post_type = get_post_meta( get_the_id(), '_single_post_type', true );
		$image_src_array = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full', true );
		require_once(THEME_FUNCTIONS . "/bfi_cropping.php");
		$image_src = bfi_thumb( $image_src_array[ 0 ], array('width' => $image_width, 'height' => $image_height));
		if ( $post_type == '' ) {
			$post_type = 'image';
		}
	?>
	<div class="mk-main-wrapper-holder">
	<div class="theme-page-wrapper <?php echo $single_layout; ?>-layout mk-grid vc_row-fluid <?php echo $padding; ?>">
			<div class="theme-content <?php echo $padding; ?> no-margin-top">

						<?php if ( $mk_options['single_portfolio_cats'] == 'true' ) : ?>
						<span class="portfolio-single-cat"><?php echo implode( ', ', mk_get_portfolio_tax(get_the_id(), true) ); ?></span>
						<?php endif; ?>


						<?php if ( $mk_options['single_portfolio_social'] == 'true' && get_post_meta( $post->ID, '_portfolio_social', true ) != 'false' ) : ?>

						<?php /*   Social Share */ ?>
						<div class="single-social-section portfolio-social-share">

							<div class="mk-love-holder"><?php echo mk_love_this(); ?></div>	
							
							<div class="blog-share-container">
								<div class="blog-single-share mk-toggle-trigger"><i class="mk-moon-share-2"></i></div>
								
								<ul class="single-share-box mk-box-to-trigger">
									<li><a class="facebook-share" data-title="<?php the_title(); ?>" data-url="<?php echo get_permalink(); ?>" href="#"><i class="mk-jupiter-icon-simple-facebook"></i></a></li>
									<li><a class="twitter-share" data-title="<?php the_title(); ?>" data-url="<?php echo get_permalink(); ?>" href="#"><i class="mk-moon-twitter"></i></a></li>
									<li><a class="googleplus-share" data-title="<?php the_title(); ?>" data-url="<?php echo get_permalink(); ?>" href="#"><i class="mk-jupiter-icon-simple-googleplus"></i></a></li>
									<li><a class="linkedin-share" data-title="<?php the_title(); ?>" data-url="<?php echo get_permalink(); ?>" href="#"><i class="mk-jupiter-icon-simple-linkedin"></i></a></li>
									<li><a class="pinterest-share" data-image="<?php echo $image_src_array[0]; ?>" data-title="<?php the_title(); ?>" data-url="<?php echo get_permalink(); ?>" href="#"><i class="mk-jupiter-icon-simple-pinterest"></i></a></li>
								</ul>
							</div>
						</div>

						<?php endif; ?>

						<div class="clearboth"></div>
			<?php
	$featured_image = get_post_meta( $post->ID, '_portfolio_featured_image', true ) ? get_post_meta( $post->ID, '_portfolio_featured_image', true ) : 'true';

	 the_content(); ?>


<?php if ( $mk_options['enable_portfolio_comment'] == 'true' ) : comments_template( '', true ); endif; ?>

	<div class="clearboth"></div>
	</div>
	<?php endwhile; ?>
	<?php  if ( $single_layout != 'full' ) get_sidebar();  ?>
	<div class="clearboth"></div>
	</div>
	</div>

<?php
if ( $mk_options['enable_portfolio_similar_posts'] == 'true' && get_post_meta( $post->ID, '_portfolio_similar', true ) !='false' ) :
	do_action( 'portfolio_similar_posts' );
	
endif;
?>

</div>
<?php get_footer(); ?>
