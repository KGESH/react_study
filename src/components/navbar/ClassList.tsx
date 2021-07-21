const removeNone = (index: number) => {
    const item: any = document.getElementsByClassName("nav__hidden_list");
    item[index].classList.replace("none", "block");
}
const addNone = (index: number) => {
    const item: any = document.getElementsByClassName("nav__hidden_list");
    item[index].classList.replace("block", "none");
}

const item0 = () => {
    removeNone(0);
}
const item000 = () => {
    addNone(0);
}

const item1 = () => {
    removeNone(1);
}
const item001 = () => {
    addNone(1);
}

const item2 = () => {
    removeNone(2);
}
const item002 = () => {
    addNone(2);
}

const item3 = () => {
    removeNone(3);
}
const item003 = () => {
    addNone(3);
}

const item4 = () => {
    removeNone(4);
}
const item004 = () => {
    addNone(4);
}

export {
    item0,
    item000,
    item1,
    item001,
    item2,
    item002,
    item3,
    item003,
    item4,
    item004,

};