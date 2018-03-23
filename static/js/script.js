$(document).ready(function(){
	alert("Encrypted key is sended to your mail!");
		 $("#pass1_id").blur(function(){
			 var e=$("#pass_id").val();
			var	s=$("#pass1_id").val();
			if(e===s) {
				//alert("equal");
			} else {
				alert("Password's are Not Equal");
			}
	
		});
});


	  function onSignIn(googleUser) {
	  		alert("Duck");
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
		$(".g-signin2").css("display","none");
		$(".data").css("display","block");
		alert("Duck");
        alert("ID: " + profile.getId()); // Don't send this directly to your server!
        alert('Full Name: ' + profile.getName());
        alert('Given Name: ' + profile.getGivenName());
        alert('Family Name: ' + profile.getFamilyName());
        alert("Image URL: " + profile.getImageUrl());
        alert("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      };
function signOut(){
var auth2=gapi.auth2.getAuthInstance();
auth2.signOut().then(function(){
alert("You gone outside!");
$(".g-signin2").css("display","block");
$(".data").css("display","none");
});
}
    