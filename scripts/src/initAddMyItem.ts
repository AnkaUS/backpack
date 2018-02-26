function initAddMyItem(): void {
    const button = document.getElementById("b2") as HTMLButtonElement;
    button.addEventListener("click", addListItem);

    function addListItem(event: Event): void {
        const items = document.getElementById("items") as HTMLUListElement;
        const inText = document.getElementById("in1") as HTMLInputElement;
        if (event == undefined) {
            return;
        }
        const target = event.target as HTMLInputElement;
        if (target.name == undefined) {
            return;
        }
        if (inText.value != '') {
            const li = document.createElement('li') as HTMLLIElement;
            li.appendChild(document.createTextNode(inText.value));
            items.appendChild(li);
            inText.value = '';
        }
    }
}

export {
    initAddMyItem as default,
};