// export const rendergradient = (colorId) => {
//     let gradient = "";
//     switch (colorId) {
//         case 1:
//             gradient = `${"to right" + "," + "#42275a" + "," + "#734b6d"}`;
//             return gradient;
//         case 2:
//             gradient = `${"to right" + "," + "#45b649" + "," + "#a8e063"}`;
//         default:
//             return gradient
//     }
// }
export const rendergradient = (colorId) => {
    let gradient = "";
    switch (colorId) {
        case 1:
            gradient = "to right, #42275a, #734b6d";
            break; // Added break statement
        case 2:
            gradient = "to right, #45b649, #a8e063";
            break; // Added break statement
        default:
            gradient = ""; // Ensuring default always returns a valid value
    }
    return gradient;
};
