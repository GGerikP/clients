<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'bhcdb');

/** MySQL database username */
define('DB_USER', 'bhc_dba');

/** MySQL database password */
define('DB_PASSWORD', 'IAmAHumanist2014');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Y/fm,YzkVIdd1,WnYGz9iP2gPUrbr:rjmZ[!5eKNKq;K`e%()=>:#saaLOLUBOOV');
define('SECURE_AUTH_KEY',  '8v[aM#O1T~?|J6je-utd]#|wc5SSt)CvE8H#KS%5cI}3 hOlG&LBW67I|TiSlGJ.');
define('LOGGED_IN_KEY',    'Z [Z#m@h?nNJ,|I/sOc$bi-z&w=@_VqI)ZeUFgVDD>1+[g_)hhMjIfxZ6OmO$h]h');
define('NONCE_KEY',        'pC}Tv$Fzi`#im VY%W%SO_b3}3Q^lv+F8|fnl2<b_Eg]Q=ftSo;+30Z1-b4C8hX#');
define('AUTH_SALT',        '|8u#/*VeN}d:@>u~x6y`;3+xC|SJTzLFtO|8n+Em-TYMvlG@AL$Gt/ae[v~p!;e2');
define('SECURE_AUTH_SALT', '5la4<i%}hBH$E|*z&h[$0RHQ~1t&@0D,Y,6O}jz%*@eR16r?ObK4qs m{X4`:8L^');
define('LOGGED_IN_SALT',   'bnsW92XmRjV[FB}/qs/h7&cmUEA@=h}# *~PlG6L[.-bwY_,yvTQ0</250Z8#gh/');
define('NONCE_SALT',       '2c6j3t-O*@u-lC,fn[1B?E6LO&-7Sn/C)Rg;bHGT@.9L[w-$uMwsLkx/_=A>V;R(');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
