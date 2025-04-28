// // var script = document.createElement("script");
// // script.async = true;
// // script.src = 'https://www.googletagmanager.com/gtag/js?id=G-VV3WNJLYL9'
// // document.head.appendChild(script);
// //
// // window.dataLayer = window.dataLayer || [];
// //
// // const gtag = ()=>{
// //     dataLayer.push(arguments);
// // }
// //
// // gtag('js', new Date());
// // gtag('config', 'G-VV3WNJLYL9')
//
//
// let QUALITY = 2,
//     WIDTH = Math.floor(window.innerWidth / QUALITY),
//     HEIGHT = Math.floor(window.innerHeight / QUALITY),
//     SIZE = WIDTH * HEIGHT,
//     context, image, data,
//     buffer1, buffer2, tempbuffer,
//     isUserInteracting, pointers;
//
// let timeout;
// const idle = () => {
//     isUserInteracting = false;
// }
//
// const init = () => {
//     let container, canvas;
//     container = document.getElementById('container');
//
//     canvas = document.createElement("canvas");
//     canvas.classList.add("canvas");
//     canvas.width = WIDTH;
//     canvas.height = HEIGHT;
//     canvas.style.width = window.innerWidth + "px";
//     canvas.style.height = window.innerHeight + "px";
//     console.log(HEIGHT)
//     console.log(WIDTH)
//     console.log(canvas.style.height)
//     console.log(canvas.style.width)
//     container.appendChild(canvas);
//
//     context = canvas.getContext("2d");
//     // const gradient = context.createLinearGradient(0, 0, 600, 400)
//     // gradient.addColorStop(0.12, "#e10a0a");
//     // gradient.addColorStop(0.33, "#1f60c5");
//     // gradient.addColorStop(0.53, "#e71717");
//     // gradient.addColorStop(0.87, "#31da1b");
//     // gradient.addColorStop(0.69, "#cc42e1");
//     // gradient.addColorStop(1, "#999999");
//     // background: #000000;
//     context.fillStyle = "black";
//     context.fillRect(0, 0, WIDTH, HEIGHT);
//     image = context.getImageData(0, 0, WIDTH, HEIGHT);
//     data = image.data;
//
//     buffer1 = [];
//     buffer2 = [];
//
//     for (let i = 0; i < SIZE; i++) {
//         buffer1[i] = 0;
//         buffer2[i] = i > WIDTH && i < SIZE - WIDTH && Math.random() > 0.995 ? 255 : 0;
//     }
//
//     document.addEventListener('mousedown', onDocumentMouseDown, false);
//     document.addEventListener('mousemove', onDocumentMouseMove, false);
//     document.addEventListener('mouseup', onDocumentMouseUp, false);
//     document.addEventListener('mouseout', onDocumentMouseOut, false);
//
//     document.addEventListener('touchstart', onDocumentTouchStart, false);
//     document.addEventListener('touchmove', onDocumentTouchMove, false);
//     document.addEventListener('touchend', onDocumentTouchEnd, false);
//
//     document.addEventListener('keyup', onDocumentKeyUp, false);
// }
//
// // Event Handlers
//
// function onDocumentMouseDown(event) {
//     event.preventDefault();
//     isUserInteracting = true;
//     pointers = [[event.clientX / QUALITY, event.clientY / QUALITY]];
// }
//
// function onDocumentMouseMove(event) {
//     // event.preventDefault();
//     isUserInteracting = true;
//     pointers = [[event.clientX / QUALITY, event.clientY / QUALITY]]
//     clearTimeout(timeout);
//     timeout = setTimeout(idle, 1000)
// }
//
// function onDocumentMouseUp(event) {
//     isUserInteracting = false;
// }
//
// function onDocumentMouseOut(event) {
//     isUserInteracting = false;
// }
//
// function onDocumentTouchStart(event) {
//     isUserInteracting = true;
//     event.preventDefault();
//     pointers = [];
//     for (var i = 0; i < event.touches.length; i++) {
//         pointers.push([event.touches[i].pageX / QUALITY, event.touches[i].pageY / QUALITY]);
//     }
//
// }
//
// function onDocumentTouchMove(event) {
//     event.preventDefault();
//     pointers = [];
//     for (var i = 0; i < event.touches.length; i++) {
//         pointers.push([event.touches[i].pageX / QUALITY, event.touches[i].pageY / QUALITY]);
//     }
// }
//
// function onDocumentTouchEnd(event) {
//     event.preventDefault();
//     isUserInteracting = false;
// }
//
// function onDocumentKeyUp(e) {
//     emit(Math.random() * WIDTH, Math.random() * HEIGHT);
// }
//
// function emit(x, y) {
//     buffer1[Math.floor(x) + (Math.floor(y) * WIDTH)] = 255;
// }
//
// const loop = () => {
//     if (isUserInteracting) {
//         for (var i = 0; i < pointers.length; i++) {
//             emit(pointers[i][0], pointers[i][1]);
//         }
//     }
//     let pixel;
//     const iMax = (WIDTH * HEIGHT) - WIDTH;
//     for (var i = WIDTH; i < iMax; i++) {
//         pixel = ((buffer1[i - 1] + buffer1[i + 1] + buffer1[i - WIDTH] + buffer1[i + WIDTH]) >> 1) - buffer2[i];
//         pixel -= pixel >> 20;
//         buffer2[i] = pixel;
//         pixel = pixel > 255 ? 255 : pixel < 0 ? 0 : pixel;
//         data[(i * 4) + 1] = pixel;
//         data[((i + 1) * 4) + 2] = pixel;
//     }
//     tempbuffer = buffer1;
//     buffer1 = buffer2;
//     buffer2 = tempbuffer;
//     context.putImageData(image, 0, 0);
// }
//
// init()
// setInterval(loop, 1000 / 60);
//
