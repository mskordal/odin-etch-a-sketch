const total_gridboxes = 16*16;

const body = document.querySelector("body");
const grid = document.getElementById("grid");

for (let gridbox_num = 0; gridbox_num < total_gridboxes; gridbox_num++)
{
	const gridbox = document.createElement("div");
	gridbox.setAttribute("class", "gridbox");
	gridbox.style.color = "ivory";
	grid.appendChild(gridbox);
}
