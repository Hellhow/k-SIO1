console.log(`script loaded`);

// On récup les élem de notre calc

const buttons = document.querySelectorAll(`button`);
console.log(buttons);

const screen = document.querySelector(`.screen`);
console.log('screen:', screen);

const history = document.querySelector(`.history`);
console.log('history:', history);

// On def les var utiles

let fistOperand = ``;
let lastOperand = ``;
let operator = ``;

// On ajoute un écouteur d'event à chaque btn

buttons.forEach((button) => {
    // boucle, button prend chaque valeur de tableau
    button.addEventListener(`click`, (e) => {
        //On récupère le contenu du btn
        const buttonContent = e.target.value;

        // Si c'est un chiffre, on l'ajoute à l'opérande en cours
        if (!isNaN(buttonContent) || buttonContent === ".") {
            if (operator === ``) {
                fistOperand += buttonContent;
                // console.log('fistOperand:', fistOperand)
                screen.innerText = fistOperand;
            } else {
                lastOperand += buttonContent
                // console.log('lastOperand:', lastOperand)
                screen.innerText = lastOperand;
            };
        };
        // console.log('fistOperand:', fistOperand)
        // if (buttonContent === "-" && fistOperand === `` && fistOperand !== `-`) {
        //     fistOperand += buttonContent;
        //     console.log('fistOperand:', fistOperand)
        //     screen.innerText = `-` + screen.innerText;
        // };
        // if (buttonContent === "-" && fistOperand === `-` && fistOperand !== ``) {
        //     fistOperand = ``;
        //     screen.innerText = `0`;
        // };
        // Ajout d'un opérateur à condition que fistOperand est non vide
        if (fistOperand !== ``) {
            switch (buttonContent) {
                // opérateur usuelle
                case "+":
                case "-":
                case "*":
                case "/":
                    operator = buttonContent;
                    // console.log('operator:', operator)
                    break;
                // opérateur racine carré
                case "sqrt":
                    screen.innerText = Math.sqrt(eval(`${fistOperand}`));
                    fistOperand = Math.sqrt(eval(`${fistOperand}`));
                    lastOperand = ``;
                    operator = ``;
                    break;
                // opérateur carré
                case "pow":
                    screen.innerText = Math.pow(eval(`${fistOperand}`), 2);
                    fistOperand = Math.pow(eval(`${fistOperand}`), 2);
                    lastOperand = ``;
                    operator = ``;
                    break;
            };
        };
        // affichage du résulta du calcule avec opérateur usuelle
        if (buttonContent === "=" && lastOperand !== ``) {
            screen.innerText = eval(`${fistOperand} ${operator} ${lastOperand}`);
            fistOperand = eval(`${fistOperand} ${operator} ${lastOperand}`);
            // console.log('fistOperand:', fistOperand)
            lastOperand = ``;
            operator = ``;
        };
        switch (buttonContent) {
            // effacer le calcule
            case "C":
                screen.innerText = `0`;
                fistOperand = ``;
                lastOperand = ``;
                operator = ``;
                break;
            // effacer le nombre afficher
            case "CE":
                if (operator != ``) {
                    screen.innerText = `0`;
                    lastOperand = ``;
                    // console.log('lastOperand:', lastOperand)
                } else {
                    screen.innerText = `0`;
                    fistOperand = ``;
                    // console.log('fistOperand:', fistOperand)
                };
                break;
        };
    });
});
