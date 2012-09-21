Reveal.addEventListener( 'fragmentshown', function( event ) {
    // event.fragment = the fragment DOM element
	var item = $(event.fragment);
	console.log(item)
	if (item.data('hide')) {
		$('#' + item.data('hide')).css('text-decoration', 'line-through');
	}
} );
Reveal.addEventListener( 'fragmenthidden', function( event ) {
    // event.fragment = the fragment DOM element
} );