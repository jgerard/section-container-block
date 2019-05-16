<?php
/**
 * Plugin Name: Section Container Block
 * Plugin URI: https://github.com/jgerard/section-container-block
 * Description: section-container-block — is a Gutenberg plugin created via create-guten-block.
 * Author: mrahmadawais, maedahbatool, jasongerard
 * Author URI: https://jasongerard.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
