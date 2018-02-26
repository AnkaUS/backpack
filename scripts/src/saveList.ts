function save(): void {
    const saveButton = document.getElementById("saveButton") as HTMLButtonElement;
    saveButton.addEventListener("click", saveText);
    const ul = document.getElementById('items') as HTMLUListElement;

    function saveText(event: Event): void {
        if (event == undefined) {
            return;
        }
        const target = event.target as HTMLInputElement;
        if (target.name == undefined) {
            return;
        }

        const lis: NodeListOf<HTMLLIElement> = ul.getElementsByTagName('li');
        const lisContent: String[] = Array.prototype.slice.call(lis).map((item: HTMLLIElement) => {
            return item.textContent;
        })
        console.log(lisContent);
        console.log(JSON.stringify(lisContent));
        fetch('http://localhost:3000/save', {
            method: "POST",
            body: JSON.stringify(lisContent),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}

export {
    save as default,
};