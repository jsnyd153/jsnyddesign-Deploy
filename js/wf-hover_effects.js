// document.addEventListener("DOMContentLoaded", function () {
//   setTimeout(function () {
//     init_Tilt1();
//     init_Tilt2();
//   }, 1000);
// });

// function init_Tilt1() {
//   const elements = document.querySelectorAll('[tilt="1"]');

//   elements.forEach(function (element) {
//     /* Get the height and width of the element */
//     const height = element.clientHeight;
//     const width = element.clientWidth;

//     /*
//      * Add a listener for mousemove event
//      * Which will trigger function 'handleMove'
//      * On mousemove
//      */
//     element.addEventListener("mousemove", handleMove);

//     /* Define function a */
//     function handleMove(e) {
//       /*
//        * Get position of mouse cursor
//        * With respect to the element
//        * On mouseover
//        */
//       /* Store the x position */
//       const xVal = e.layerX;
//       /* Store the y position */
//       const yVal = e.layerY;

//       /*
//        * Calculate rotation valuee along the Y-axis
//        * Here the multiplier 20 is to
//        * Control the rotation
//        * You can change the value and see the results
//        */
//       const yRotation = 10 * ((xVal - width / 2) / width);

//       /* Calculate the rotation along the X-axis */
//       const xRotation = -10 * ((yVal - height / 2) / height);

//       /* Generate string for CSS transform property */
//       const string =
//         "perspective(500px) scale(1.1) rotateX(" +
//         xRotation +
//         "deg) rotateY(" +
//         yRotation +
//         "deg)";

//       /* Apply the calculated transformation */
//       element.style.transform = string;
//     }

//     /* Add listener for mouseout event, remove the rotation */
//     element.addEventListener("mouseout", function () {
//       element.style.transform =
//         "perspective(500px) scale(1) rotateX(0) rotateY(0)";
//     });

//     /* Add listener for mousedown event, to simulate click */
//     element.addEventListener("mousedown", function () {
//       element.style.transform =
//         "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
//     });

//     /* Add listener for mouseup, simulate release of mouse click */
//     element.addEventListener("mouseup", function () {
//       element.style.transform =
//         "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
//     });
//   });
// } /* Store the element in el  - tilt 1*/

// function init_Tilt2() {
//   const elements = document.querySelectorAll('[tilt="2"]');

//   elements.forEach(function (element) {
//     /* Get the height and width of the element */
//     const height = element.clientHeight;
//     const width = element.clientWidth;

//     /*
//      * Add a listener for mousemove event
//      * Which will trigger function 'handleMove'
//      * On mousemove
//      */
//     element.addEventListener("mousemove", handleMove);

//     /* Define function a */
//     function handleMove(e) {
//       /*
//        * Get position of mouse cursor
//        * With respect to the element
//        * On mouseover
//        */
//       /* Store the x position */
//       const xVal = e.layerX;
//       /* Store the y position */
//       const yVal = e.layerY;

//       /*
//        * Calculate rotation valuee along the Y-axis
//        * Here the multiplier 20 is to
//        * Control the rotation
//        * You can change the value and see the results
//        */
//       const yRotation = -0.25 * ((xVal - width / 2) / width);

//       /* Calculate the rotation along the X-axis */
//       const xRotation = 0.25 * ((yVal - height / 2) / height);

//       /* Generate string for CSS transform property */
//       const string =
//         "perspective(100px) scale(1) rotateX(" +
//         xRotation +
//         "deg) rotateY(" +
//         yRotation +
//         "deg)";

//       /* Apply the calculated transformation */
//       element.style.transform = string;

//       console.log(
//         "moved: y=" +
//           yRotation +
//           ", yval=" +
//           yVal +
//           ", x=" +
//           xRotation +
//           ", xVal=" +
//           xRotation +
//           ", height=" +
//           height +
//           ", width=" +
//           width
//       );
//     }

//     /* Add listener for mouseout event, remove the rotation */
//     element.addEventListener("mouseout", function () {
//       element.style.transform =
//         "perspective(100px) scale(1) rotateX(0) rotateY(0)";
//       console.log("out");
//     });

//     /* Add listener for mousedown event, to simulate click */
//     // element.addEventListener("mousedown", function () {
//     //   element.style.transform =
//     //     "perspective(100px) scale(0.9) rotateX(0) rotateY(0)";
//     // });

//     /* Add listener for mouseup, simulate release of mouse click */
//     // element.addEventListener("mouseup", function () {
//     //   element.style.transform =
//     //     "perspective(100px) scale(1) rotateX(0) rotateY(0)";
//     // });
//   });
// } /* Store the element in el  - tilt 2*/
