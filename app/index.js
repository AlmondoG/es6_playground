import {addParagraph} from "./helpers";

import SuperPerson from "./person";



const Leo = new SuperPerson("Leo", "teleport");

addParagraph(Leo.talk("ayyyye"));

addParagraph(Leo.saySuperPower("teleport"));