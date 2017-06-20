<?php
global $mk_options;

$mk_footer_class = $show_footer_old = $show_footer = '';
$post_id = global_get_post_id();
if($post_id) {
  $show_footer_old = get_post_meta($post_id, '_footer', true );
  $show_footer = get_post_meta($post_id, '_template', true );

}

if($mk_options['footer_size'] == 'true') {
  $mk_footer_class .= 'mk-background-stretch';
}
if($mk_options['disable_footer'] == 'false' || ($show_footer_old == 'false' || $show_footer == 'no-footer' || $show_footer == 'no-header-footer' || $show_footer == 'no-header-title-footer' || $show_footer == 'no-footer-title')) {
  $mk_footer_class .= ' mk-footer-disable';
}

if($mk_options['footer_type'] == '2') {
  $mk_footer_class .= ' mk-footer-unfold';
}

$boxed_footer = (isset($mk_options['boxed_footer']) && !empty($mk_options['boxed_footer'])) ? $mk_options['boxed_footer'] : 'true';
$boxed_footer_css = ($boxed_footer == 'true') ? ' mk-grid' : ' fullwidth-footer';

?>
<section id="mk-footer" class="<?php echo $mk_footer_class; ?>">
<?php if($mk_options['disable_footer'] == 'true' && ($show_footer_old != 'false' && $show_footer != 'no-footer' && $show_footer != 'no-header-footer' && $show_footer != 'no-header-title-footer' && $show_footer != 'no-footer-title')) : ?>
<div class="footer-wrapper<?php echo $boxed_footer_css;?>">
<div class="mk-padding-wrapper">

<?php
$footer_column = $mk_options['footer_columns'];
if(is_numeric($footer_column)):
	switch ( $footer_column ):
		case 1:
		$class = '';
			break;
		case 2:
			$class = 'mk-col-1-2';
			break;
		case 3:
			$class = 'mk-col-1-3';
			break;
		case 4:
			$class = 'mk-col-1-4';
			break;
		case 5:
			$class = 'mk-col-1-5';
			break;
		case 6:
			$class = 'mk-col-1-6';
			break;
	endswitch;
	for( $i=1; $i<=$footer_column; $i++ ):
?>
<div class="<?php echo $class; ?>">
<?php if (!empty($mk_options['footer_logo']) && $i == 1) : ?>
<div class="mk-footer-logo">
    <a href="<?php echo home_url( '/' ); ?>" title="<?php bloginfo( 'name' ); ?>"><img alt="<?php bloginfo( 'name' ); ?>" src="<?php echo $mk_options['footer_logo']; ?>" /></a>
</div>
<?php endif; ?>
<?php mk_sidebar_generator( 'get_footer_sidebar' )  ?>
</div>
<?php endfor;

else :

switch($footer_column):
		case 'third_sub_third':
?>
		<div class="mk-col-1-3"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
		<div class="mk-col-2-3">
			<div class="mk-col-1-3"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
			<div class="mk-col-1-3"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
			<div class="mk-col-1-3"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
		</div>
<?php
			break;
		case 'sub_third_third':
?>
		<div class="mk-col-2-3">
			<div class="mk-col-1-3"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
			<div class="mk-col-1-3"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
			<div class="mk-col-1-3"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
		</div>
		<div class="mk-col-1-3"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
<?php
			break;
		case 'third_sub_fourth':
?>
		<div class="mk-col-1-3"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
		<div class="mk-col-2-3 last">
			<div class="mk-col-1-4"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
			<div class="mk-col-1-4"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
			<div class="mk-col-1-4"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
			<div class="mk-col-1-4"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
		</div>
<?php
			break;
		case 'sub_fourth_third':
?>
		<div class="mk-col-2-3">
			<div class="mk-col-1-4"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
			<div class="mk-col-1-4"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
			<div class="mk-col-1-4"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
			<div class="mk-col-1-4"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
		</div>
		<div class="mk-col-1-3"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
<?php
			break;
		case 'half_sub_half':
?>
		<div class="mk-col-1-2"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
		<div class="mk-col-1-2">
			<div class="mk-col-1-2"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
			<div class="mk-col-1-2"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
		</div>
<?php
			break;
		case 'half_sub_third':
?>
		<div class="mk-col-1-2"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
		<div class="mk-col-1-2">
			<div class="mk-col-1-3"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
			<div class="mk-col-1-3"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
			<div class="mk-col-1-3"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
		</div>
<?php
			break;
		case 'sub_half_half':
?>
		<div class="mk-col-1-2">
			<div class="mk-col-1-2"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
			<div class="mk-col-1-2"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
		</div>
		<div class="mk-col-1-2"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
<?php
			break;
		case 'sub_third_half':
?>
		<div class="mk-col-1-2">
			<div class="mk-col-1-3"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
			<div class="mk-col-1-3"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
			<div class="mk-col-1-3"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
		</div>
		<div class="mk-col-1-2"><?php mk_sidebar_generator( 'get_footer_sidebar' ); ?></div>
<?php
			break;
	endswitch;
endif;?>
<div class="clearboth"></div>
</div>
</div>
<?php endif;?>
<?php if ( $mk_options['disable_sub_footer'] == 'true' && ($show_footer_old != 'false' && $show_footer != 'no-footer' && $show_footer != 'no-header-footer' && $show_footer != 'no-header-title-footer' && $show_footer != 'no-footer-title')) { ?>
<div id="sub-footer">
	<div class="<?php echo $boxed_footer_css;?>">

    	<span class="mk-footer-copyright"><?php echo stripslashes($mk_options['copyright']); ?>2</span>
    	<?php do_action('footer_menu'); ?>
	</div>
	<div class="clearboth"></div>
</div>
<?php } ?>

</section>





</div>
<?php


	do_action( 'side_dashboard');


	if($mk_options['custom_js']) :

	?>
		<script type="text/javascript">
		<?php echo stripslashes($mk_options['custom_js']); ?>
		</script>
	<?php

	endif;

	if($mk_options['analytics']){
		?>
		<script type="text/javascript">
		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', '<?php echo stripslashes($mk_options['analytics']); ?>']);
		  _gaq.push(['_trackPageview']);

		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();

		</script>
	<?php } ?>

</div>


	<a href="#" class="mk-go-top"><i class="mk-icon-chevron-up"></i></a>
	
	<?php
		do_action('quick_contact');
		do_action('full_screen_search_form');
	?>


	<?php wp_footer(); ?>

	<?php
		global $app_dynamic_styles;
		global $app_modules;

		$app_dynamic_styles_ids = array();
		$app_dynamic_styles_inject = '';

		$ken_styles_length = count($app_dynamic_styles);

		if ($ken_styles_length > 0) {
			foreach ($app_dynamic_styles as $key => $val) { 
				$app_dynamic_styles_ids[] = $val["id"]; 
				$app_dynamic_styles_inject .= $val["inject"];
			};
		}

		$modulesLength = count($app_modules);


		if ($modulesLength > 0) {
			foreach ($app_modules as $key => $val) { 
				$modules[] = $val["name"]; 
				$params[] = $val["params"];
			};
		}

	?>
	<script type="text/javascript">
		window.$ = jQuery

		var dynamic_styles = '<?php echo mk_clean_init_styles($app_dynamic_styles_inject); ?>';
		var dynamic_styles_ids = (<?php echo json_encode($app_dynamic_styles_ids); ?> != null) ? <?php echo json_encode($app_dynamic_styles_ids); ?> : [];

		var styleTag = document.createElement('style'),
			head = document.getElementsByTagName('head')[0];

			//console.log('jhonny')
		styleTag.type = 'text/css';
		styleTag.setAttribute('data-ajax', '');
		styleTag.innerHTML = dynamic_styles;
		head.appendChild(styleTag);

		$('.mk-dynamic-styles').each(function() {
			$(this).remove();
		});

		function ajaxStylesInjector() {
			$('.mk-dynamic-styles').each(function() {
				var $this = $(this),
					id = $this.attr('id'),
					commentedStyles = $this.html();
					styles = commentedStyles
							 .replace('<!--', '')
							 .replace('-->', '');


				if(dynamic_styles_ids.indexOf(id) === -1) {
					$('style[data-ajax]').append(styles);
					$this.remove();
				}

				dynamic_styles_ids.push(id);
			});
		};

		<?php 
			if ($modulesLength > 0) {
				for ($i = 0; $i < $modulesLength; $i++) {
					echo "abb.modules." . $modules[$i] . ".init({";
						foreach ($params[$i] as $key => $val) {
							echo $key . ": '$val',";
						}
					echo "}); \n";
				} 

				echo "abb.init();";
			}
		?>
	</script>

	<script type="text/javascript">
		var $ = jQuery;

		function nav_item_width() {
			if($(window).width() > 960) {
				$('.main-navigation-ul > li.no-mega-menu ul.sub-menu').each(function() {
					var items = $(this).find('li.menu-item a.menu-item-link').length;
					var item_width = ($(window).innerWidth() / items);
			    	$(this).find('li.menu-item').width(item_width);
				});
			} else {
				$('.main-navigation-ul > li.no-mega-menu ul.sub-menu li.menu-item').width('100%');
			}
		};
		nav_item_width();

		

    	if($('.price, .location-select').length > 0) {
    		var default_text = '<h3 style="text-align: center; color: #7ac4d4; padding-top: 15px;">PRICE</h3><h5 style="text-align: center; color: #7ac4d4;">RELATED TO LOCATION</h5>'
    		$('.price').html(default_text);
    		$('.select .select-title').click(function() {
    			if($('.select').hasClass('open')){
    				$('.select').addClass('open');
    				$('.select .select-options').slideDown(200)
    			} else {
    				$('.select').addClass('open');
    				$('.select .select-options').slideDown(200)
    			}
    		});
    		$('.location-select').find('.option').click(function() {
    			$(this).addClass('selected');
    			var price = $(this).data('price');
    			if(price){
    				$('.price').html('<h3 style="display: inline; color: #1E448D; font-size: 38px; line-height: 110px; vertical-align: top; padding-left: 8px;">£</h3><h2 style="color: #1E448D;">' + price + '</h2>');
    			} else {
    				$('.price').html(default_text);
    			}
    		});
    	}

		$(window).resize(function() {
			nav_item_width();
		});

		$(".regNewCustomer").click(function() {
			$(".extra-fields").slideDown(500);
			$('html, body').delay(1000).animate({
	        	scrollTop: $('.wpcf7').offset().top + 'px'
	    	}, 1000);
		});

		$(".regNumberInput button").click(function() {
			$.get("/", {
				reg: $(".regNumberInput input").val()
			}).done(function(data) {
				var data = JSON.parse(data);
				//console.log(data);
				$(".extra-fields").slideDown(500);
				$(".wpcf7 input[name='first-name']").val(data.firstname);
				$(".wpcf7 input[name='last-name']").val(data.lastname);
				$(".wpcf7 input[name='email']").val(data.email);
				$(".wpcf7 input[name='mobile']").val(data.mobile);
				$(".wpcf7 input[name='address']").val(data.address);
				$(".wpcf7 input[name='postcode']").val(data.postcode);
				$(".wpcf7 input[name='dob']").val(data.dob);
				$(".wpcf7 select[name='location']").val(data.location);
				$(".wpcf7 input[name='reg']").val(data.reg);
				$(".wpcf7 select[name='service']").val(data.service);
			});
		});


	</script>
<script>
// replace with your "Sign out" menu id
  var ae, e = document.getElementById('menu-item-1803');

  if (e)
  {
    ae = e.getElementsByTagName('a');

    if (ae)
    {
      e = ae[0];

      if (e)
      {
         e.href = '<?php echo wp_logout_url(home_url()); ?>'.replace(/&amp;/g, '&');
      }
    }
  }

</script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-64479336-1', 'auto');
  ga('send', 'pageview');

</script>
</body>
</html>