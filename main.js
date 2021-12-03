$(function(){

    $('#fullpage').fullpage({
		//options here
		anchors:['section1', 'section2', 'section3', 'section4', 'section5'] ,

		autoScrolling : true,
		scrollHorizontally : true,
		navigation : true ,
		navigationPosition :'right', 
		sectionsColor : [ '#000', '#000' ,'#000' ,'#000' ,'#000' ] ,
		keyboardScrolling : true ,
		navigationTooltips: [ 'ff','dd','dd','dd','as']

		


	});
    
});