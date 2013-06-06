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

describe("A false case", function() {
	it("canot be true", function() {
		expect(true).toBe(true);
	});
});

require(["Sorvete"],
function (Sorvete) {
//require(function () {
//require( function () {

//var Sorvete=require("Sorvete");
console.log("OPA");

describe("Testes do namespace", function() {
	it("Tem que poder contruir o objeto", function() {
//		expect(new Sorvete() ).not.toBe(undefined);
	});
});

describe("Testes 2", function() {
	it("Sera que vai", function() {
		expect( true ).toBe(true);
	});
});

console.log("SAIU OPA");

});

