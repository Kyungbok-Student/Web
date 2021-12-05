$(function(){

    $('#fullpage').fullpage({
		
		anchors:['section1', 'section2', 'section3', 'section4', 'section5'] ,

		autoScrolling : true,
		scrollHorizontally : true,
		navigation : true ,
		navigationPosition :'right', 
		sectionsColor : [ '#000', '#000' ,'#000' ,'#000' ,'#000' ] ,
		keyboardScrolling : true ,
		navigationTooltips: [ '메인','개발','소개','다운로드','연락처'],
		loopTop: true,
		loopBottom: true ,
		slidesNavigation: true
		
	});
    
});