// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
//Ti.Database.install('/EHS_CHILDCARE.sqlite','EHS_CHILDCARE2');

/*
var shortName = 'EHS_CHILDCARE.sqlite';
var dbversion = '1.2';
var displayName = 'EHS_CHILDCARE';
var maxSize = 65535;
*/
Ti.Database.install('/EHS_CHILDCARE.sqlite','EHS_CHILDCARE2');

// START SUNIL ADDED SLIDING MENU PART


// END SUNIL ADDED SLIDING MENU PART

 $.loginButton.addEventListener('click', function(e){
    var db =Ti.Database.open('EHS_CHILDCARE2');
 
 	var usernameValue=$.userNameText.value;
 	var passwordValue=$.passwordText.value;
 	var validUser='Invalid';
    Ti.API.info('$.userNameText.vlaue : '+usernameValue);
    Ti.API.info('$.passwordText.vlaue : '+passwordValue);

    var usersRS = db.execute('SELECT FIRSTNAME,PASSWORD FROM LKSTAFF WHERE FIRSTNAME LIKE ?',usernameValue);
 
    while(usersRS.isValidRow()){
  	 var usernameFrmDB=usersRS.fieldByName('FIRSTNAME');
     var passwordFrmDB=usersRS.fieldByName('PASSWORD');
     Ti.API.info('Username From LKSTAFF  : '+usernameFrmDB+' ,  Password : '+passwordFrmDB +'Comparing with usernameValue :--> '+usernameValue+' ,passwordValue:--> '+passwordValue);
  	
  	 if(usernameFrmDB==usernameValue & passwordFrmDB==passwordValue){
  	 	Ti.API.info('Valid User');
  	 	validUser='Valid';
  	 }
  	 usersRS.next();
    }

   // alert('Exiting  Sign In'+usersRS);
  
   usersRS.close();

   doLogin(e);
  
});
 
 
function doLogin (e){
   var caseLoad=Alloy.createController("caseLoad").getView();
   caseLoad.open();
}
function doExit (e){
	alert('Clicked Exit');
}

function signUp(e){
alert('Entered  Sign Up');
  	Titanium.API.info('Clicked Sign Up.!');

} 
function closeKeyboard(e) {
    e.source.blur();
}

function openCaseLoad(e){
alert('userNameValue:--> '+$.userNameText.value+' passwordValue : '+$.passwordText.value);

}

/*if (Ti.Platform.osname === 'iphone')
	$.win.open({
		transition : Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	});
else
	//$.win.open();*/
	
$.index.open();
