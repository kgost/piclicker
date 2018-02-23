var gpio 		= require( 'rpi-gpio' ),
		express = require( 'express' ),
		app			= express(),
		iclickerState = { power: false };

app.use(express.static(__dirname + '/inc'));

app.get( '/', function( req, res, next ) {
	res.sendFile( __dirname + '/views/index.html' );
} );

app.get( '/input/:input', function( req, res, next ) {
	switch ( Number( req.params.input ) ) {
		// turn on
		case 0:
			if ( !iclickerState.on ) {
				gpio.setup( 7, gpio.DIR_HIGH, write( 7 ) );
			}
			res.status( 200 ).json({
				message: 'Action Preformed',
				obj: iclickerState
			});
			break;
		// turn off
		case 1:
			if ( iclickerState.on ) {
				gpio.setup( 7, gpio.DIR_LOW, write( 7 ) );
			}
			res.status( 200 ).json({
				message: 'Action Preformed',
				obj: iclickerState
			});
			break;
		// press a
		case 2:
			gpio.setup( 11, gpio.DIR_LOW, write( 11 ) );
			res.status( 200 ).json({
				message: 'Action Preformed',
				obj: iclickerState
			});
			break;
		// press b
		case 3:
			gpio.setup( 13, gpio.DIR_LOW, write( 13 ) );
			res.status( 200 ).json({
				message: 'Action Preformed',
				obj: iclickerState
			});
			break;
		// press c
		case 4:
			gpio.setup( 15, gpio.DIR_LOW, write( 15 ) );
			res.status( 200 ).json({
				message: 'Action Preformed',
				obj: iclickerState
			});
			break;
		// press d
		case 5:
			gpio.setup( 29, gpio.DIR_LOW, write( 29 ) );
			res.status( 200 ).json({
				message: 'Action Preformed',
				obj: iclickerState
			});
			break;
		// press e
		case 6:
			gpio.setup( 31, gpio.DIR_LOW, write( 31 ) );
			res.status( 200 ).json({
				message: 'Action Preformed',
				obj: iclickerState
			});
			break;
		default:
			res.status( 400 );
	}
} );

app.listen( 3000, function() {
	console.log( 'Running' );
} );

function write( pin ) {
	gpio.write( pin, false, function( err ) {
		if ( err ) {
			throw err;
		}

		console.log( 'written to pin' );
	} );
}