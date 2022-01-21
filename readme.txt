=== User Role Editor Pro ===
Contributors: Vladimir Garagulya (https://www.role-editor.com)
Tags: user, role, editor, security, access, permission, capability
Requires at least: 4.4
Tested up to: 5.8.1
Stable tag: 4.60.2
Requires PHP: 5.6
License URI: https://www.role-editor.com/end-user-license-agreement/

User Role Editor Pro WordPress plugin makes user roles and capabilities changing easy. Edit/add/delete WordPress user roles and capabilities.

== Description ==

User Role Editor Pro WordPress plugin allows you to change user roles and capabilities easy.
Just turn on check boxes of capabilities you wish to add to the selected role and click "Update" button to save your changes. That's done. 
Add new roles and customize its capabilities according to your needs, from scratch of as a copy of other existing role. 
Unnecessary self-made role can be deleted if there are no users whom such role is assigned.
Role assigned every new created user by default may be changed too.
Capabilities could be assigned on per user basis. Multiple roles could be assigned to user simultaneously.
You can add new capabilities and remove unnecessary capabilities which could be left from uninstalled plugins.
Multi-site support is provided.

== Installation ==

Installation procedure:

1. Deactivate plugin if you have the previous version installed.
2. Extract "user-role-editor-pro.zip" archive content to the "/wp-content/plugins/user-role-editor-pro" directory.
3. Activate "User Role Editor Pro" plugin via 'Plugins' menu in WordPress admin menu. 
4. Go to the "Settings"-"User Role Editor" and adjust plugin options according to your needs. For WordPress multisite URE options page is located under Network Admin Settings menu.
5. Go to the "Users"-"User Role Editor" menu item and change WordPress roles and capabilities according to your needs.

In case you have a free version of User Role Editor installed: 
Pro version includes its own copy of a free version (or the core of a User Role Editor). So you should deactivate free version and can remove it before installing of a Pro version. 
The only thing that you should remember is that both versions (free and Pro) use the same place to store their settings data. 
So if you delete free version via WordPress Plugins Delete link, plugin will delete automatically its settings data. Changes made to the roles will stay unchanged.
You will have to configure lost part of the settings at the User Role Editor Pro Settings page again after that.
Right decision in this case is to delete free version folder (user-role-editor) after deactivation via FTP, not via WordPress.

== Changelog ==

= [4.60.2] 21.09.2021 =
* Core version: 4.60.2
* Update: Marked as compatible with WordPress 5.8.1
* Fix: Admin menu access add-on: Blocked admin menu item "SEO->Workouts" (from Yoast SEO plugin) was still available as main menu item.
* Fix: Multisite: Add-ons data from the main site were not replicated to subsites after click "Update Network" button from the "Network Admin->Users->User Role Editor".
* Fix: Navigation menus access add-on:
* - PHP Warning: Undefined variable $result in /wp-content/plugins/user-role-editor-pro/pro/includes/classes/nav-menus-admin-controller.php on line 28
* - PHP Fatal error: Uncaught TypeError: Unsupported operand types: string + string in /wp-content/plugins/user-role-editor-pro/pro/includes/classes/nav-menus-admin-view.php:146 
* Core version was updated to version 4.60.2
* New: URE user capability 'ure_edit_gravityforms_access' was added (for future use).
* Fix: Multisite: URE_Editor::is_full_network_sync() returned FALSE, instead TRUE for the AJAX call, while call was made from the Network Admin (wp-admin/network/).

= [4.60.1] 21.07.2021 =
* Core version: 4.60.1
* Update: Marked as compatible with WordPress 5.8.
* Fix: Edit restrictions add-on: If one of the pages on hierarchy tree was not published (draft) it may become unavailable for editing in spite of user can (is allowed) edit the parent page.
* Core version was updated to version 4.60.1
* Fix: PHP Notice: Undefined property: URE_User_View::$multisite in /wp-content/plugins/user-role-editor/includes/classes/user-view.php on line 145

= [4.60] 28.06.2021 =
* Core version: 4.60
* Fix: WP Multisite: User lost granted roles after click "Users->Capabilities->Update Network". 
* New: Edit posts/pages/custom post types restrictions add-on: new custom filters were added: 'ure_post_edit_access_restricted_taxonomies', 'ure_post_edit_access_allowed_terms', 'ure_post_edit_access_terms_to_exclude'.
* Update: Edit posts/pages/custom post types restrictions add-on: 
*   - It is compatible now with "Admin Columns" and "Advanced Custom Fields" plugins. "Admin columns" plugin did not showed "Advanced Custom Fields" managed column values, when URE applied edit restrictions. URE excludes now from edit restrictions ACF plugins custom post types 'acf-field-group' and 'acf-field'.
*   - It is compatible now with "Contact Form 7" plugin. You can restrict access to the CF7 plugin records the same way as to any other custom post type.
* Core version was updated to version 4.60
* New: Notification box was replaced with one based on the [jpillora/nofifyjs](https://notifyjs.jpillora.com/) jQuery plugin. It does not move down page content. It disappears automatically after 5 seconds. Click on it to remove it manually.
* Fix: "Add capability" shows warning styled notification when needed (invalid characters, etc.) instead of a successful one.
* Fix: Capabilities group uncheck and revert selection is blocked for the administrator role to exclude accident deletion of permissions from administrator role.


Full list of changes is available in changelog.txt file.
