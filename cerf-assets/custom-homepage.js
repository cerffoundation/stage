$(function() {


  //INTRO ANIMATE
  $('#title').addClass('make_transist').addClass('showscale');	
  
  
  //SLIDER
  $('.slick-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    variableWidth: false,
    draggable: true,
    autoplay: true,
    cssEase: 'linear',
    speed: 300,
	autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  
  

  //SECTIONS DEFINE
  var transEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'MozTransition' : 'transitionend',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
  };
  var transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];
  var supportTransitions = Modernizr.csstransitions;
  var isAnimating = false;
  
  var $panelsContainer = $( '#bl-panel-work-items' );
  var $panels = $panelsContainer.children( 'div' );
  var $totalPanels = $panels.length;
  
 
  //(VIA NAV)
  $( ".nav-button" ).click(function(){ 
  
    //PREPARE INDICES
	var $currentIndex = $( ".bl-next-panel" ).attr('id');
    var $getButtonClicked = $( this ).attr( 'id' );
	var $newIndex = $getButtonClicked.substring(4);
	if ( parseInt( $newIndex ) == "0" ) { $newIndex = 1; }
    if ( $currentIndex == $newIndex ) { return; }
  
    //SHOW OR HIDE NAVIGATION
	if ( ($currentIndex == 1) && ($newIndex > 1) ) { $( '#panel-navigation' ).slideDown(); }
	if ( ($newIndex == 1) && ($currentIndex > 1) ) { $( '#panel-navigation' ).slideUp(); }
		
    //HIDE CURRENT PANEL
    $( '.panel-' + $currentIndex ).removeClass( 'bl-show-work' ).addClass( 'bl-hide-current-work' ).on( transEndEventName, function( event ) {
	  if( !$( event.target ).is( 'div' ) ) return false;
      $( this ).off( transEndEventName ).removeClass( 'bl-hide-current-work' );
      isAnimating = false;
	} );	
	if( !supportTransitions ) {
	  $( '.panel-' + $currentIndex ).removeClass( 'bl-hide-current-work' );
	  isAnimating = false;
	}
	
	//SHOW NEW PANEL
    $( '.panel-' + $newIndex ).addClass( 'bl-show-work' );
	$( '.bl-next-panel' ).attr( "id", $newIndex );
	
	//UPDATE COLORS
	if ( $newIndex == 2 || $newIndex == 4 ) { $( '.bl-next-panel' ).css("color", "#ffc417"); }
	else if ( $newIndex == 3 ) { $( '.bl-next-panel' ).css("color", "#fa575d"); }
	else if ( $newIndex == 5 ) { $( '.bl-next-panel' ).css("color", "#449bf2"); }
	else { $( '.bl-next-panel' ).css("color", "#ffffff"); }
	
	//UPDATE LOGOS
	if ( $newIndex == 2 || $newIndex == 5 || $newIndex == 6 ) { $('.logo-navy').hide(); $('.logo-white').show(); }
	else { $('.logo-white').hide(); $('.logo-navy').show(); }
	
	//UPDATE NAV ACTIVE STATE
    $( '#nav-' + $currentIndex ).removeClass( 'active-nav' )
	$( '#nav-' + $newIndex ).addClass( 'active-nav' )
	
  })
  
   
  
  //SECTIONS (VIA CARET)
  $( ".bl-next-panel" ).click(function(){ 
  
    //GET CURRENT PANEL INDEX
    var $panelIndex = $( this ).attr('id');
	var $nextIndex = parseInt($panelIndex) +1;
	if ($nextIndex == 7) { $nextIndex = 1; }

    $( '.panel-' + $panelIndex ).removeClass( 'bl-show-work' ).addClass( 'bl-hide-current-work' ).on( transEndEventName, function( event ) {
	  if( !$( event.target ).is( 'div' ) ) return false;
      $( this ).off( transEndEventName ).removeClass( 'bl-hide-current-work' );
      isAnimating = false;
	} );	
	if( !supportTransitions ) {
	  $( '.panel-' + $panelIndex ).removeClass( 'bl-hide-current-work' );
	  isAnimating = false;
	}
	
	//SHOW NEXT PANEL AND UPDATE INDEX FOR NEXT CLICK
    $( '.panel-' + $nextIndex ).addClass( 'bl-show-work' );
	if ( ($panelIndex == 1) && ($nextIndex > 1) ) { $( '#panel-navigation' ).slideDown(); }
	if ( ($nextIndex == 1) && ($panelIndex > 1) ) { $( '#panel-navigation' ).slideUp(); }
	
	//UPDATE COLORS
	if ( $panelIndex == 1 || $panelIndex == 3 ) { $( '.bl-next-panel' ).css("color", "#ffc417"); }
	else if ( $panelIndex == 2 ) { $( '.bl-next-panel' ).css("color", "#fa575d"); }
	else if ( $panelIndex == 4 ) { $( '.bl-next-panel' ).css("color", "#449bf2"); }
	else { $( '.bl-next-panel' ).css("color", "#ffffff"); }
	
	//UPDATE LOGOS
	if ( $nextIndex == 2 || $nextIndex == 5 || $nextIndex == 6 ) { $('.logo-navy').hide(); $('.logo-white').show(); }
	else { $('.logo-white').hide(); $('.logo-navy').show(); }
	
	//UPDATE INDEX
    if ($panelIndex == 6) { this.id = 1; }
	else { this.id = parseInt($panelIndex) + 1; }
		
	//UPDATE NAV ACTIVE STATE
    $( '#nav-' + $panelIndex ).removeClass( 'active-nav' )
	$( '#nav-' + $nextIndex ).addClass( 'active-nav' )
			
  })
  
  
});