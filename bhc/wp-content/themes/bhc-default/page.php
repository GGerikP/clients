<?php get_header(); ?>
<?php get_sidebar(); ?>
	<div id="content" class="narrowcolumn">
		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>