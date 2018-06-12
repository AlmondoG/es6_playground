//Use curly brackets ONLY WHEN IMPORTING NAMED FILES AND HAVE TO USE NAME USED IN DECLARATION OF FILE/FUNCTION
import {addHeader, addParagraph} from "./helpers";
//When using default export YOU CAN NAME IT WHATEVER YOU WANT AND DON'T NEED CURLY BRACKETS
import addThis, {multiply} from "./add";

addHeader("Yooo this be some crazy shite");

addHeader(`55 + 81 = ${addThis(55, 81)}`);

addParagraph("Yo mane this still some crazy shite");

addParagraph(`69 * 45 = ${multiply(69, 45)}`);