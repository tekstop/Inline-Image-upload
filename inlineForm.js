 /*jshint multistr: true*/
 /*jshint jquery: true*/
 /*exported toggleDisplay*/
 var inlineFormjs= '<span><br /><button style="display:inline" onclick="toggleDisplay()">Change</button> \
        <span id="formContainer" style="display:none"> \
            <form id="picForm" style="display:inline" method="post" action="" enctype="multipart/form-data"> \
            <input id="element_photo" name="element_photo" class="file" type="file" accept ="image/gif,image/jpeg,image/png"/> \
            <br /> \
            <input id="saveForm" class="button_text" type="submit" name="Submit" value="Submit"/> \
            </form> \
        </span> \
        <span id="message"><br /></span> \
        </span>';
 $('#imageReplacer').append(inlineFormjs);


function toggleDisplay() {
    $('#formContainer').toggle();
}

 $('#element_photo').change(function() {
// This starts
    if(this.files!==undefined) {
        createImage(this.files[0]);
    }
    else {
        showMessage('Your Browser does not support HTML5 uploads! Cannot show preview!');
    }
});


function createImage(file) {   
    var reader;
    try
    {
        reader = new FileReader();
        var max_file_size = 1048576 * 2;
        if (file.size > max_file_size) {
            showMessage('File size is too big, limit under 2MB');
            return;
        }              
    } catch (err) {
        showMessage('Your Browser does not support HTML5 uploads! Cannot show preview!');
        return;
    }
    reader.onload = function(e){

        // e.target.result holds the DataURL which
        // can be used as a source of the image:
        //
        $('#imageHolder').attr('src',e.target.result);               
    };
 
    // Reading the file as a DataURL. When finished,
    // this will trigger the onload function above:
    reader.readAsDataURL(file);
 
    $('#message').hide();

}

function showMessage(msg) {
    $('#message').html(msg);
}

$('#picForm').submit(function(event) {
    alert('Override this');
    //$.post('exampleServer.php', $(this).serialize()).done(function (data) {
    //  alert(data);  
    //});
    event.preventDefault();
});


