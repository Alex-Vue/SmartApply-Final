import processOfApp from "../processOfApp.js";
import DropZone from "./DropZone.js";

export default class Item {
    constructor(id, content) {
        const bottomDropZone = DropZone.createDropZone();

        this.elements = {};
        this.elements.root = Item.createRoot();
        this.elements.input = this.elements.root.querySelector(".kanban_item-input");

        this.elements.root.dataset.id = id;
        this.elements.input.textContent = content;
        this.content = content;
        this.elements.root.appendChild(bottomDropZone);

        const onBlur = () => {
            const newContent = this.elements.input.textContent.trim();

            if(newContent === this.content){ // === instead of ==
                return;
            }

            this.content = newContent;
            processOfApp.updateItem(id, {
                content: this.content
            });
        };

        this.elements.input.addEventListener("blur", onBlur);
        this.elements.root.addEventListener("dblclick", () => {
            const check = confirm("Would you like to delete this item ?");

            if(check){
                processOfApp.deleteItem(id);

                this.elements.input.removeEventListener("blur", onBlur);
                this.elements.root.parentElement.removeChild(this.elements.root);
            }
        });

        //For gragging code
        this.elements.root.addEventListener("dragstart", e => {
           e.dataTransfer.setData("text/plain", id);
        });

        this.elements.input.addEventListener("drop", e => { //Preventing default behaviour for dataID copy
           e.preventDefault();
        });
    }

    static createRoot() {
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
            <div class="kanban_item">
                <div class="kanban_item-input" contenteditable></div>
            </div>`).children[0];
    }

}