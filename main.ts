// Get the button element
// function addToOutput(value: string) {
//     output.innerText += value;
// }

// const button = document.getElementById("btn1") as HTMLButtonElement;
// const output = document.getElementById("output") as HTMLDivElement;

// // Add click event listener
// button.addEventListener("click", addToOutput.bind(null, "1"));
// // Get the button element
// const button_2 = document.getElementById("btn2") as HTMLButtonElement;
// // Add click event listener
// button_2.addEventListener("click", addToOutput.bind(null, "2"));

class Calculator_UI {
    public numbers: number[];
    public numberRefrence: { [key: number]: HTMLButtonElement };
    public operators: string[];
    public operatorRefrence: { [key: string]: HTMLButtonElement };
    constructor() {
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        this.numberRefrence = {};
        this.operators = ['+', '-', '*', '/','=','(',')'];
        this.operatorRefrence = {};
        this.setup();
    }

    private setup() {
        const numpad = document.getElementById("numpad") as HTMLDivElement;
        if (numpad) {
            for (const num of this.numbers) {
                const div = document.createElement("button"); // create a new div
                div.innerText = num.toString();            // set text to number
                numpad.appendChild(div);                   // add div to numpad
                this.numberRefrence[num] = div;           // store reference
            }
        } else {
            console.error("Numpad div not found!");
        }
        const operatorpad = document.getElementById("operatorpad") as HTMLDivElement;
        if (operatorpad) {
            for (const op of this.operators) {
                const div = document.createElement("button"); // create a new div
                div.innerText = op;            // set text to operator
                operatorpad.appendChild(div);                   // add div to operatorpad
                this.operatorRefrence[op] = div;           // store reference
            }
        } else {
            console.error("Operatorpad div not found!");
        }
        console.log(this.operatorRefrence);
        console.log(this.numberRefrence);
        this.addEventListeners();
    }

    private addEventListeners() {
        for (const num of this.numbers) {
            const button = this.numberRefrence[num];
            button.addEventListener("click", () => {
                this.handleNumberClick(num);
            });
        }
        for (const op of this.operators) {
            const button = this.operatorRefrence[op];
            button.addEventListener("click", () => {
                this.handleOperatorClick(op);
            });
        }
    }

    private handleNumberClick(num: number) {
        const output = document.getElementById("output") as HTMLDivElement;
        if (output) {
            output.innerText += num.toString();
        }
    }

    private handleOperatorClick(op: string) {
        const output = document.getElementById("output") as HTMLDivElement;
        if (output) {
            output.innerText += op;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const calc = new Calculator_UI();  // Call your class here
    // const op_logic = new operator_logic();
});


class operator_logic{
  
    constructor() {
       
        // this.setup();
    }




}