define( ["js/sorvete/proxy"],
function( proxy ) {	
	console.log("SORVETE LOAD");
	return {
		"proxy": proxy,
		"sorvete": function(title) {
			return alert("SORVETE "+title);
		}
	};
});

/*
var sorvete = {};
sorvete.client = {};

sorvete.client.Proxy = {};
sorvete.client.Profiler = {};
*/

