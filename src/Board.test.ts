import { Board } from "./Board";

describe("Board standard", () =>
{
	it("should store with and height upon construction", () =>
	{
		let b = new Board(6, 5);
		expect(b.getWidth()).toBe(5);
		expect(b.getHeight()).toBe(6);
	});

	it("should return null when out of bounds", () =>
	{
		let b = new Board(2, 3);
		b.addLine(['0', '0', '0']);
		b.addLine(['0', '0', '0']);
		expect(b.getNode(-1, 0)).toBe(null);
		expect(b.getNode(2, 0)).toBe(null);
		expect(b.getNode(0, -1)).toBe(null);
		expect(b.getNode(0, 3)).toBe(null);
	});

	it("should create a board 000.", () =>
	{
		let b = new Board(2, 2);
		b.addLine(['0', '0']);
		b.addLine(['0', '.']);
		expect(b.getNode(0, 0).getValue()).toBe('0');
		expect(b.getNode(0, 1).getValue()).toBe('0');
		expect(b.getNode(1, 0).getValue()).toBe('0');
		expect(b.getNode(1, 1).getValue()).toBe('.');
	});

	it("should create a board 0.00", () =>
	{
		let b = new Board(2, 2);
		b.addLine(['0', '.']);
		b.addLine(['0', '0']);
		expect(b.getNode(0, 0).getValue()).toBe('0');
		expect(b.getNode(0, 1).getValue()).toBe('.');
		expect(b.getNode(1, 0).getValue()).toBe('0');
		expect(b.getNode(1, 1).getValue()).toBe('0');
	});

	it("should create a board 0.", () =>
	{
		let b = new Board(2, 1);
		b.addLine(['0']);
		b.addLine(['.']);
		expect(b.getNode(0, 0).getValue()).toBe('0');
		expect(b.getNode(1, 0).getValue()).toBe('.');
	});

	it("should create a board .0", () =>
	{
		let b = new Board(1, 2);
		b.addLine(['.', '0']);
		expect(b.getNode(0, 0).getValue()).toBe('.');
		expect(b.getNode(0, 1).getValue()).toBe('0');
	});

	it("will find neighboor on the bottom", () =>
	{
		let b = new Board(3, 3);
		b.addLine(['0', '0', '0']);
		b.addLine(['.', '0', '0']);
		b.addLine(['0', '0', '0']);
		expect(b.getBottomNeighboor(0, 0).getCoordinates()).toBe('0 2');
		expect(b.getBottomNeighboor(1, 1).getCoordinates()).toBe('1 2');
		expect(b.getBottomNeighboor(2, 0).getCoordinates()).toBe('-1 -1');
	});

	it("will find neighboor on the right", () =>
	{
		let b = new Board(3, 3);
		b.addLine(['0', '.', '0']);
		b.addLine(['0', '0', '0']);
		b.addLine(['0', '0', '0']);
		expect(b.getRightNeighboor(0, 0).getCoordinates()).toBe('2 0');
		expect(b.getRightNeighboor(1, 1).getCoordinates()).toBe('2 1');
		expect(b.getRightNeighboor(0, 2).getCoordinates()).toBe('-1 -1');
	});

	it("will return node coordinates then Right coord and bot coord", () =>
	{
		let b = new Board(3, 3);
		b.addLine(['0', '.', '0']);
		b.addLine(['0', '0', '0']);
		b.addLine(['0', '0', '0']);
		expect(b.getNodeResult(b.getNode(0, 0))).toBe('0 0 2 0 0 1');
		expect(b.getNodeResult(b.getNode(1, 1))).toBe('1 1 2 1 1 2');
		expect(b.getNodeResult(b.getNode(2, 2))).toBe('2 2 -1 -1 -1 -1');
	});


});