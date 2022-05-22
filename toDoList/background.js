const images = ["desert.jpg", "mountain.jpg"];
const image = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(/image/${image})`;
