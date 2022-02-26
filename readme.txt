=== User Role Editor Pro ===
Contributors: Vladimir Garagulya (https://www.role-editor.com)
Tags: user, role, editor, security, access, permission, capability
Requires at least: 4.4
Tested up to: 5.9
Stable tag: 4.61
Requires PHP: 7.3
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

= [4.61] 26.01.2022 =
* Core version: 4.61.1
* Update: Marked as compatible with WordPress 5.9.
* Update: PHP 7.3 is marked as required.
* New: Gravity Forms Edit Access add-on: It's possible to set what forms is allowed to edit for the selected role.
* New: Content view restrictions add-on: [user_role_editor] shortcode "roles" and "except_roles" attributes supports the "no_role" value for logged-in users with "No role for this site" - without any role granted.
* Fix: Content view restrictions add-on: PHP Warning:  A non-numeric value encountered in /wp-content/plugins/user-role-editor-pro/pro/includes/classes/posts-view.php on line 224
* Fix: Meta boxes access add-on:  PHP Warning:  A non-numeric value encountered in /wp-content/plugins/user-role-editor-pro/pro/includes/classes/meta-boxes.php on line 452
* Core version was updated to version 4.61.1
* Update: If installed PHP/WordPress version is lower than required one, script termination ( wp_die() ) was replaced with notice-warning admin notice output.
* Update: "Settings->User Role Editor->Tools->Reset" button is additionally protected from the unintended/accidental usage by text input field. Manual input of "Permanently delete all custom user roles and capabilities" text is required to enable the "Reset" button.
* Update: Partial code review and refactoring according with WordPress & PHP coding standards.
* Fix: "Users->selected user->Capabilities" page: 'select all' checkbox did not work.

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

Full list of changes is available in changelog.txt file.
