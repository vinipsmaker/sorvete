/*global sorvete:false*/

describe("Testes do namespace", function() {
	it("Tem que ter um namespace chamado sorvete", function() {
		expect(sorvete).not.toBe(undefined);
	});
	it("Tem que ter um namespace chamado sorvete.server", function() {
		expect(sorvete.server).not.toBe(undefined);
	});
});

