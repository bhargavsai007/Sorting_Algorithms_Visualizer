
// Function to implement Bubble Sort

function Bubble() {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (var i = 0; i < array_size; i++) {

        
        for (var j = 0; j < array_size - i - 1; j++) {
            div_update(divs[j], div_sizes[j], 'yellow');

            if (div_sizes[j] > div_sizes[j + 1]) {
                //Colour update
                div_update(divs[j], div_sizes[j], 'red');
                div_update(divs[j + 1], div_sizes[j], 'red');

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                // Height update
                div_update(divs[j], div_sizes[j], 'red');
                div_update(divs[j + 1], div_sizes[j], 'red');
            }

            div_update(divs[j], div_sizes[j], 'blue');
        }
        
        div_update(divs[j], div_sizes[j], 'green');
    }

    div_update(divs[0], div_sizes[0], 'green');

    enable_buttons();
}