/*global sorvete:false*/

describe("Testes do namespace", function() {
	it("Tem que ter um namespace chamado sorvete", function() {
		expect(sorvete).not.toBe(undefined);
	});
	it("Tem que ter um namespace chamado sorvete.client", function() {
		expect(sorvete.client).not.toBe(undefined);
	});
});

