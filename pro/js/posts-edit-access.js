/**
 * 
 * Posts View access management for roles support
 * 
 **/

jQuery(function() {
    if (jQuery('#ure_posts_edit_access_button').length==0) {
        return;
    }
    // "Posts Edit" button at User Role Editor dialog
    jQuery('#ure_posts_edit_access_button').button({
        label: ure_data_posts_edit_access.posts_edit
    }).on('click', (function(event) {
        event.preventDefault();
        ure_posts_edit_access_dialog_prepare();
    }));

});


function ure_posts_edit_access_dialog_prepare() {
    
    jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        dataType: 'html',
        data: {
            action: 'ure_ajax',
            sub_action: 'get_posts_edit_access_data_for_role',
            current_role: ure_current_role,
            wp_nonce: ure_data.wp_nonce
        },
        success: function(response) {
            var data = jQuery.parseJSON(response);
            if (typeof data.result !== 'undefined') {
                if (data.result === 'success') {                    
                    ure_posts_edit_access_dialog(data);
                } else if (data.result === 'error') {
                    alert(data.message);
                } else {
                    alert('Wrong response: ' + response)
                }
            } else {
                alert('Wrong response: ' + response)
            }
        },
        error: function(XMLHttpRequest, textStatus, exception) {
            alert("Ajax failure\n" + XMLHttpRequest.statusText);
        },
        async: true
    });    
    
}


function ure_posts_edit_access_dialog(data) {
    jQuery(function($) {      
        $('#ure_posts_edit_access_dialog').dialog({
            dialogClass: 'wp-dialog',           
            modal: true,
            autoOpen: true, 
            closeOnEscape: true,      
            width: 680,
            height: 470,
            resizable: false,
            title: ure_data_posts_edit_access.dialog_title +' ('+ ure_current_role +')',
            'buttons'       : {
            'Update': function () {                                  
                    var form = $('#ure_posts_edit_access_form');
                    form.submit();
                    $(this).dialog('close');
            },
            'Cancel': function() {
                $(this).dialog('close');
                return false;
            }
          }
      });    
      $('.ui-dialog-buttonpane button:contains("Update")').attr("id", "dialog-update-button");
      $('#dialog-update-button').html(ure_ui_button_text(ure_data_posts_edit_access.update_button));
      $('.ui-dialog-buttonpane button:contains("Cancel")').attr("id", "dialog-cancel-button");
      $('#dialog-cancel-button').html(ure_ui_button_text(ure_data.cancel));
      
      $('#ure_posts_edit_access_container').html(data.html);

    });                                
    
}

