// console.log("from script file send");src="https://foshanxiaoyu.github.io/images/dog.png"
//  <canvas id="myCanvas" width="400" height="400" style="border:1px solid grey" ></canvas>

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.height = canvas.width;

// Create an image object
    const image = new Image();
    // Set the source of the image
    image.src = "https://foshanxiaoyu.github.io/images/dog.png"; //"./imagegs/048.png" //"https://foshanxiaoyu.github.io/images/dog.png"; // Replace with the actual path to your image

    // Wait for the image to load
    image.onload = function() {
      // Draw the image onto the canvas
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
