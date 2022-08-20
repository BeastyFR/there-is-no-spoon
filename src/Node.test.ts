import { Node } from "./Node";

describe("Node", () =>
{
	it("should create a node", () =>
	{
		let n: Node = Node.createFromCharacter('0', 1, 2);
		expect(n.getValue()).toBe('0');
		expect(n.getCoordinates()).toBe('2 1');
	});

	it("should set coordinates", () =>
	{
		let n: Node = Node.createFromCharacter('0', 1, 2);
		expect(n.getCoordinates()).toBe('2 1');
		n.setCoordinates(3, 4);
		expect(n.getCoordinates()).toBe('4 3');
	});

	it("should set value", () =>
	{
		let n: Node = Node.createFromCharacter('0', 1, 2);
		expect(n.getValue()).toBe('0');
		n.setValue('4');
		expect(n.getValue()).toBe('4');
	});

	it("should test if node is empty", () =>
	{
		let n: Node = Node.createFromCharacter('0', 1, 2);
		expect(n.isEmpty()).toBe(false);
		n.setValue('.');
		expect(n.isEmpty()).toBe(true);
	});
});
