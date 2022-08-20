import { Board } from "./Board";

export function run()
{
	/**
   * Don't let the machines win. You are humanity's last hope...
   **/

	const width = parseInt(readline()); // the number of cells on the X axis
	const height = parseInt(readline()); // the number of cells on the Y axis

	let board: Board = new Board(height, width);
	for (let i = 0; i < height; i++)
	{
		const line = readline(); // width characters, each either 0 or .
		board.addLine(line.split(''));
	}

	console.error(board.getBoardAsString());

	for (let x = 0; x < height; x++)
	{
		for (let y = 0; y < width; y++)
		{
			let node = board.getNode(x, y);
			if (node && !node.isEmpty())
			{
				console.log(board.getNodeResult(node));
			}
		}
	}
}
