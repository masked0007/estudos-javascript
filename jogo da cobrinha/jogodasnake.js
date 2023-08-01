const canvas = document.getElementById("spacee");
const ctx = canvas.getContext("2d").value;
const size = 30;
const snake = [
    { x: 200, y: 200 },
    { x: 230, y: 200 }
];
const drawsnake = () => {
    ctx.fillStyle = "#ddd"
    snake.forEach((position, index) => {
        if (index == snake.length -1) {
            ctx.fillStyle = "blue"
        }
        ctx.fillRect(position.x, position.y, size, size)
    })
};

let direction = "down"

const Movesnake = () => {
    if (!direction) {
        return
    }
    const head = snake[snake.length -1];
    
    if (direction == "right") {
        snake.push({x: head.x + size, y: head.y})
    }

    if (direction == "left") {
        snake.push({x: head.x - size, y: head.y})
    }
    
    if (direction == "up") {
        snake.push({x: head.x, y: head.y - size})
    }

    if (direction == "down") {
        snake.push({x: head.x, y: head.y + size})
    }
    
    snake.shift();
};

const gameloop = () => {
    ctx.cleaReact() => {
        (0, 0, 600, 600)
    }
}