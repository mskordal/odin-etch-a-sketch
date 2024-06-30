const grid_len = 16;
const total_gridrows = grid_len;
const total_gridboxes = grid_len;
const gridbox_width = "40px"

const body = document.querySelector("body");
const grid = document.getElementById("grid");

function createGrid()
{
	for (let gridrow_num = 0; gridrow_num < total_gridrows; gridrow_num++)
	{
		const gridrow = document.createElement("div");
		gridrow.setAttribute("id", "gridrow");
		gridrow.style.display = "flex";
		gridrow.style.flexBasis = gridbox_width;
		grid.appendChild(gridrow);
		for (let gridbox_num = 0; gridbox_num < total_gridboxes; gridbox_num++)
		{
			const gridbox = document.createElement("div");
			gridbox.setAttribute("id", "gridbox");
			gridbox.style.backgroundColor = "white";
			gridbox.style.width = gridbox_width;
			gridbox.style.height = gridbox_width;
			gridbox.style.outline = "solid 1px lightgrey";
			gridrow.appendChild(gridbox);
		}
	}
}

createGrid();
