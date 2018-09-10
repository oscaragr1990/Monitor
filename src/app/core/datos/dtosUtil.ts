/**
 * 
 */
export class RedSocial {
    id: string;
    descripcion: string;
    icon: string;
    checked: boolean;
    disabled: boolean;

    constructor(id: string, descripcion: string, icon: string,  checked: boolean, disabled: boolean) {
        this.id = id;
        this.descripcion = descripcion;
        this.icon = icon;
        this.checked = checked;
        this.disabled = disabled;
    }
}