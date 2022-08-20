import { Node } from "./Node";

enum Direction
{
	RIGHT,
	BOTTOM,
	TOP,
	LEFT
}

export class Board
{
	nbCols: number;
	nbLines: number;
	board: Node[][];

	constructor(nbLines: number, nbCols: number)
	{
		this.nbCols = nbCols;
		this.nbLines = nbLines;
		this.board = [];
	}

	getWidth(): number
	{
		return this.nbCols;
	}

	getHeight(): number
	{
		return this.nbLines;
	}

	addLine(line: string[]): void
	{
		let currentLineIndex = this.board.length;
		let addedLine = [];
		let currentY = 0;
		for (let character of line)
		{
			addedLine.push(Node.createFromCharacter(character, currentLineIndex, currentY++));
		}

		this.board.push(addedLine);
	}

	getNode(x: number, y: number): Node
	{
		if (x < 0 || y < 0 || x >= this.nbLines || y >= this.nbCols)
			return null;
		return this.board[x][y];
	}

	getBottomNeighboor(x: number, y: number): Node
	{
		return this.getNextAvailableNeighboor(this.getNode(x, y), Direction.BOTTOM);
	}

	getRightNeighboor(x: number, y: number): Node
	{
		return this.getNextAvailableNeighboor(this.getNode(x, y), Direction.RIGHT);
	}

	getDirectNeighboor(node: Node, direction: Direction)
	{
		switch (direction)
		{
			case Direction.RIGHT:
				return this.getNode(node.getX(), node.getY() + 1);
			case Direction.BOTTOM:
				return this.getNode(node.getX() + 1, node.getY());
			case Direction.LEFT:
				return this.getNode(node.getX(), node.getY() - 1);
			case Direction.TOP:
				return this.getNode(node.getX() - 1, node.getY());
		}
	}

	getNextAvailableNeighboor(node: Node, direction: Direction)
	{
		let currentNodeToCheck = this.getDirectNeighboor(node, direction);
		while (currentNodeToCheck != null && currentNodeToCheck.isEmpty())
		{
			currentNodeToCheck = this.getDirectNeighboor(currentNodeToCheck, direction);
		}

		if (currentNodeToCheck == null)
			return Node.createNullNode();

		return currentNodeToCheck;
	}

	getNodeResult(node: Node): string
	{
		return node.getCoordinates()
			+ " "
			+ this.getNextAvailableNeighboor(node, Direction.RIGHT).getCoordinates()
			+ " "
			+ this.getNextAvailableNeighboor(node, Direction.BOTTOM).getCoordinates();
	}

	getBoardAsString(): string
	{
		let boardAsString = "";
		for (let x = 0; x < this.getHeight(); x++)
		{
			for (let y = 0; y < this.getWidth(); y++)
			{
				boardAsString += this.getNode(x, y).getValue();
			}
			boardAsString += "\r\n";
		}
		return boardAsString;
	}
}