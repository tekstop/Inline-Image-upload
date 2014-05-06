<?php
$demo_mode = true;
$upload_dir = '.';
$allowed_ext = array('jpg','jpeg','png','gif');

if(array_key_exists('element_photo',$_FILES) && $_FILES['element_photo']['error'] == 0 ) {
	$pic = $_FILES['element_photo'];

	if(!in_array(get_extension($pic['name']),$allowed_ext)) {
		$error = 'Only '.implode(',',$allowed_ext).' files are allowed!';
	}	

	if($demo_mode) {
		// File uploads are ignored. We only log them.
		$line = implode('		', array( date('r'), $_SERVER['REMOTE_ADDR'], $pic['size'], $pic['name']));
		file_put_contents('log.txt', $line.PHP_EOL, FILE_APPEND);
		$photo = "TempPhoto".".".get_extension($pic['name']);
	} else {
		// Move the uploaded file from the temporary 
		// directory to the uploads folder:
		$photo = "TempPhoto.".get_extension($pic['name']);
		if(!move_uploaded_file($pic['tmp_name'], $upload_dir.$photo)) {
			$error="Error uploading/moving file";
		}
	}
}

function get_extension($file_name) {
		$ext = explode('.', $file_name);
		$ext = array_pop($ext);
		return strtolower($ext);
	}
?>