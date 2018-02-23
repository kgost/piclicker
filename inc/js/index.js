$( document ).ready( function() {
	$( 'button' ).on( 'click', function( e ) {
		$.ajax({
			url: '/input/' + $( this )[0].id,
			method: 'get'
		}).done( function( data ) {
			console.log( data );
		} );
	} );
} );