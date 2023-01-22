<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'gadgetnepal' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'xO>2+$D C.K jn&?zn<6RU@(ifC!hr7gg%BF6#T)ZGoTBt6)ikdXp6u{e9,^`w 5' );
define( 'SECURE_AUTH_KEY',  '6TTcXl?QfjX(ib<n<i[~|Q_I!|l(:T`|7J--a%kk2PEG$eg6xl*<ljA!m2_Jv-b8' );
define( 'LOGGED_IN_KEY',    'o8{sN^V!bSUs=<6esDv :><vR;/HR_Sk`S{R(M#2 pl4ZenTFd -xhH$,<w[b}pR' );
define( 'NONCE_KEY',        'Zf~&,1ghA|q$2,8<n$C]My8EuViLO5<I<&[}m}=,3e.vRjK!sIJrjGiYHPw<KL5j' );
define( 'AUTH_SALT',        'b~DjkfFhoo,Yo7)7V$9*+T^|y{Iri/P-j4B,L`/@0?Hl#Ag%`P=ZjS-j|}(&cZca' );
define( 'SECURE_AUTH_SALT', 'V~kO:^i`1$E,aIm}EE(E<viI-j>.jfKAV;csCd9sXtPfza0Hdub >wGM|8w>)`=q' );
define( 'LOGGED_IN_SALT',   '1F:SUL%Zo9c FE?nqu~gp18APt>RTf^qY~Nc ?E#<JH~Q4_);1|[}gKF,v=d`20-' );
define( 'NONCE_SALT',       '(ib=P6%e>s10l]$Lk2}orQ`_#D<!1|$oT8c;2OJE;|HX `qOJ@oHUw%-$-d}N#2y' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
