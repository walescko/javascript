import estudar, {elogiar} from "./util.js";


const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {estudar("Vamos estudar React");});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener("click", () => {elogiar("O livro React do Moujor é muito bom!")});