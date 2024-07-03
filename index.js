const GRID_STARTING_SIZE = 16;
const GRID_WIDTH = 800

function random_rgb_color()
{
	let rand_int_0_to_2 = Math.floor(Math.random() * 3);
	if (rand_int_0_to_2 == 0)
	{
		return "rgba(255, 0, 0, 0)"
	}
	else if (rand_int_0_to_2 == 1)
	{
		return "rgba(0, 255, 0, 0)"
	}
	else
	{
		return "rgba(0, 0, 255, 0)"
	}
}

function paint_box(event)
{
	event.target.style.backgroundColor = "darkgrey";
}

function create_grid(size)
{
	let total_gridrows = size;
	let total_gridboxes = size;
	let gridbox_width = (GRID_WIDTH / size) + "px";
	const grid = document.getElementById("grid");
	for (let gridrow_idx = 0; gridrow_idx < total_gridrows; gridrow_idx++)
	{
		const gridrow = document.createElement("div");
		gridrow.setAttribute("id", "gridrow");
		gridrow.style.display = "flex";
		gridrow.style.flexBasis = gridbox_width;
		grid.appendChild(gridrow);
		for (let gridbox_idx = 0; gridbox_idx < total_gridboxes; gridbox_idx++)
		{
			const gridbox = document.createElement("div");
			gridbox.setAttribute("id", "gridbox");
			gridbox.style.backgroundColor = "white";
			// gridbox.style.backgroundColor = random_rgb_color();
			gridbox.style.width = gridbox_width;
			gridbox.style.height = gridbox_width;
			gridbox.style.outline = "solid 1px lightgrey";
			gridbox.addEventListener("mouseenter", paint_box);
			gridrow.appendChild(gridbox);
		}
	}
}

function is_positive_integer_up_to(n, max)
{
	if (isNaN(n)) {
		return false;	
	}
	num = Number(n);
	if (!Number.isInteger(num))
	{
		return false;
	}
	if (num < 1 || num > max)
	{
		return false;
	}
	return true;
}

function resize_grid()
{
	input_msg = "Please enter integer N to create grid NxN (N:[1,100])."
	error_msg = "Wrong input format!\n"
	final_msg = input_msg;
	let size = "";
	while(!is_positive_integer_up_to(size, 100))
	{
		size = prompt(final_msg);
		if (size == null)
		{
			return;
		}
		final_msg = error_msg + input_msg;
	}
	const grid = document.getElementById("grid");
	grid.replaceChildren();
	create_grid(size);
}

function clear_grid()
{
	const grid = document.getElementById("grid");
	for (const gridrow of grid.children)
	{
		for (const gridbox of gridrow.children)
		{
			gridbox.style.backgroundColor = "white";
		}
	}
}

const grid_resize_button = document.getElementById("grid_resize");
grid_resize_button.addEventListener("click", resize_grid)

const grid_clear_button = document.getElementById("grid_clear");
grid_clear_button.addEventListener("click", clear_grid)

create_grid(GRID_STARTING_SIZE);
