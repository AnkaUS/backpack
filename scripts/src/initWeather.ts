//import initchbox from './initcheckbox';
function initWeather(): void {
    const button = document.getElementById("b1") as HTMLButtonElement;
    button.addEventListener("click", calculateItems);
    const items = document.getElementById("items") as HTMLUListElement;

    const w1 = document.getElementById("su") as HTMLInputElement;
    const w2 = document.getElementById("rain") as HTMLInputElement;
    const w3 = document.getElementById("snow") as HTMLInputElement;
    const w4 = document.getElementById("wind") as HTMLInputElement;

    function calculateItems (event: Event): void {

        if (event == undefined) {
            return;
        }

        const target = event.target as HTMLInputElement;
        if (target.name == undefined) {
            return;
        }

        if (items) {//Здесь надо добавить сформированный список в вывод

            if (w1.checked) {
                let t1 = [
                    "солнцезащитные очки"
                    , "крем SPF 50"
                    , "головной убор"

                ];

                t1.forEach(item => {
                    const li = document.createElement('li');
                    li.appendChild(document.createTextNode(item));
                    items.appendChild(li);
                })
                w1.checked = false;
            }

            if (w2.checked) {
                let t2 = ["зонт","непромокаемая обувь","тент","дождевик"];
                t2.forEach(item => {
                    const li = document.createElement('li');
                    li.appendChild(document.createTextNode(item));
                    items.appendChild(li);
                })
                w2.checked = false;
            }

            if (w3.checked) {
                let t3 = ["термобелье","горнолыжный костюм","теплая обувь","термос","шапка","перчатки"]
                t3.forEach(item => {
                    const li = document.createElement('li');
                    li.appendChild(document.createTextNode(item));
                    items.appendChild(li);
                })
                w3.checked = false;
            }

            if (w4.checked) {
                let t4 = [
                    "непродуваемая куртка"
                    , "шарф"

                ];

                t4.forEach(item => {
                    const li = document.createElement('li');
                    li.appendChild(document.createTextNode(item));
                    items.appendChild(li);
                })
                w4.checked = false;
            }
        }
    }
}

export {
    initWeather as default,
};
