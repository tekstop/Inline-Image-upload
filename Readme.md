## Simple Profile Photo uploader 

I needed a simple script that could allow logged in users to change their profile pictures inline.  
There are multiple javascript libraries that allow you to do this, but they have tons of options and settings to worry about.  
This is a simplistic version that given a html format like this:
 
 `
 <div id="imageReplacer">         
       <img id="imageHolder" src="blank_image.png" height="200">
 </div>
`

and using the included inlineForm js will append an hidden form that will allow for easy image upload.

The user still has to take care of the submitted form (to upload the new image in the background or refresh the page)   
This can be done by implementing or over writing the submit method in the inlineForm.js


