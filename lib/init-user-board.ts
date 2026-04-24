import connectDB from "./db";
import { Board, Column } from "./models";

const DEFAULT_COLUMNS = [
  {
    name: "Open",
    order: 0,
  },
  { name: "In Progress", order: 1 },
  { name: "Under Review", order: 2 },
  { name: "Completed", order: 3 },
  { name: "Cancelled", order: 4 },
];

export async function initializeUserBoard(userId: string) {
  try {
    await connectDB();

    // Check if board already exists
    const existingBoard = await Board.findOne({ userId, name: "Job Hunt" });

    if (existingBoard) {
      return existingBoard;
    }

    // Create the board
    const board = await Board.create({
      name: "Job Hunt",
      userId,
      columns: [],
    });

    // Create default columns
    const columns = await Promise.all(
      DEFAULT_COLUMNS.map((col) =>
        Column.create({
          name: col.name,
          order: col.order,
          boardId: board._id,
          jobApplication: [],
        })
      )
    );

    // Update the board with the new column IDs
    board.columns = columns.map((col) => col._id);
    await board.save();

    return board;
  } catch (err) {
    throw err;
  }
}