require.config({
	"baseUrl": "www/",
	"paths": {
		"jquery": "thirdparty/jquery",
		"underscore": "thirdparty/underscore",
		"Sorvete": "js/sorvete/sorvete"
	},
	shim: {
		'underscore': {
			exports: '_'
		}
	}
});

xdescribe("A false case", function() {
	it("canot be true", function() {
		expect(false).toBe(true);
	});
});

require(["Sorvete"],
function (Sorvete) {

describe("Testes do namespace", function() {
	it("Tem que poder contruir o objeto", function() {
//		expect( new Sorvete() ).not.toBe(undefined);
	});
});
});

