export class Node
{
	value: string;
	x: number;
	y: number;
	constructor()
	{ }

	setValue(c: string): void
	{
		this.value = c;
	}

	getValue(): string
	{
		return this.value;
	}

	getCoordinates(): string
	{
		return this.y + " " + this.x;
	}

	setCoordinates(x: number, y: number): void
	{
		this.x = x;
		this.y = y;
	}

	static createFromCharacter(c: string, x: number, y: number): Node
	{
		let n = new Node();
		n.setValue(c);
		n.setCoordinates(x, y);
		return n;
	}

	static createNullNode(): Node
	{
		let n = new Node();
		n.setValue('.');
		n.setCoordinates(-1, -1);
		return n;
	}

	isEmpty(): boolean
	{
		return this.getValue() == ".";
	}

	getX(): number
	{
		return this.x;
	}

	getY(): number
	{
		return this.y;
	}
}