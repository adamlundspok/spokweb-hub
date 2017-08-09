export class MenuItem {
    label: string;
    url?: string;
    subMenus: MenuItem[];
    DEFAULT_LABEL = '';

    constructor(label, url?: string){
        this.label = label || this.DEFAULT_LABEL;
        this.url = url;
    }
    getAsElement(): Element {
        if(this.url) {
            let el = document.createElement('a');
            el.setAttribute('href', this.url);
            el.innerText = this.label || this.DEFAULT_LABEL;
            return el;
        } else {
            let label = document.createElement('span');
            label.innerText = this.label || this.DEFAULT_LABEL;
            return label;
        }
    }

}

export class MenuItemFactory {
    makeNavItem(item: any): Element {
        if(item.label) {
            let e = document.createElement('li');
            let m = new MenuItem(item.label, item.url || null);
            e.appendChild(m.getAsElement());

            if(item.features) {
                let sublist = document.createElement('ul');
                Object.keys(item.features).forEach((key) => {
                    let subnavitem = this.makeNavItem(item.features[key]);
                    if(subnavitem) {
                        sublist.appendChild(subnavitem);
                    }
                });
                e.appendChild(sublist);
            }
            return e;
        } else {
            throw new Error('Label not provided for nav item');
        }
    }
}