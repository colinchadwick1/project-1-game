
function copyImageToCanvas() {


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const image = document.getElementById("#goal");


ctx.drawImage(
    image, 0, 0)
}
