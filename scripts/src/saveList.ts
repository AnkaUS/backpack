function save(): void {
    const ul = document.getElementById('items') as HTMLUListElement;
    const lis: NodeListOf < HTMLLIElement > = ul.getElementsByTagName('li');
    const link: HTMLAnchorElement = document.getElementById('link') as HTMLAnchorElement
    link.addEventListener('click', saveText)

    function saveText() {
        const lisContent: any = Array.prototype.slice.call(lis).map((item: HTMLLIElement, index: Number) => {
            return `${index}) ${item.textContent}\n`;
        })
        const properties = {
            type: 'plain/text'
        };
        const file = new File(lisContent, 'list.txt', properties)
        const url = URL.createObjectURL(file);
        link.href = url;
    }
}

export {
    save as
    default,
};