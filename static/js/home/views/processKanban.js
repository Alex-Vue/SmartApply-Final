import Column from "./Column.js";

//kanban.js

export default class processKanban{
    constructor(root) {
        this.root = root;

        processKanban.columns().forEach(column => {
            //Having an instance of column class
            const columnView = new Column(column.id, column.title);

            this.root.appendChild(columnView.elements.root);

            console.log({column});
        });
    }

    static columns(){
         console.log("hel");

        return [
            {
                id: 1,
                title: "Not Started"
            },
            {
                id: 2,
                title: "In Progess"
            },
            {
                id: 3,
                title: "Completed"
            },
        ]
    }
}