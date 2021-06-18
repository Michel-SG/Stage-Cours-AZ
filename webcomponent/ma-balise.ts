class Mabalise extends HTMLElement{
    constructor(){
        console.log("constructor");
        super();
        // this.innerHTML = `
        // <style>p {
        //     background-color: red; color: white;
        // } </style>
        //     <p> ${ this.innerHTML } </p>`;
        this.style.color = "white";
        this.style.backgroundColor = "red";
        this.style.display = "block";
    }
    connectedCallback(){
        console.log("connected");
    }
    disconnectedCallback(){
        console.log("disconnected");
    }
    attributeChangeCallback(){
        console.log("ACD")
    }
}
window.customElements.define("ma-balise", Mabalise)