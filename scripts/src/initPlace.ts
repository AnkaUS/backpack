function initPlace(): void {
    const button = document.getElementById("b1") as HTMLButtonElement;
    const items = document.getElementById("items") as HTMLUListElement;

    const w1 = document.getElementById("lake") as HTMLInputElement;
    const w2 = document.getElementById("forest") as HTMLInputElement;
    const w3 = document.getElementById("mountains") as HTMLInputElement;
    const w4 = document.getElementById("beach") as HTMLInputElement;

    button.addEventListener("click", onExtern);

    function onExtern(event: Event): void {
        if (event == undefined) {
            return;
        }
        const target = event.target as HTMLInputElement;
        if (target.name == undefined) {
            return;
        }

        if (items) {
            
            if (w1.checked) {
                let t1 = [
                    "удочка"
                    , "лодка"
                    , "спасательный жилет"
                ];

                t1.forEach(item => {
                    const li = document.createElement('li');
                    li.appendChild(document.createTextNode(item));
                    items.appendChild(li);
                })
                w1.checked = false;
            }

            if (w2.checked) {
                let t2 = [
                    "средство от насекомых"
                    , "корзина для ягод/грибов"
                    , "компас"
                ];
                t2.forEach(item => {
                    const li = document.createElement('li');
                    li.appendChild(document.createTextNode(item));
                    items.appendChild(li);
                })
                w2.checked = false;
            }

            if (w3.checked) {
                let t3 = [
                    "веревка и карабины"
                ];
                t3.forEach(item => {
                    const li = document.createElement('li');
                    li.appendChild(document.createTextNode(item));
                    items.appendChild(li);
                })
                w3.checked = false;
            }

            if (w4.checked) {
                let t4 = [
                    "купальник"
                    , "шлепанцы"

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
    initPlace as default,
};
