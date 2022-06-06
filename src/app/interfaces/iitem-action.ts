export interface IItemAction {
    name: string;
    icon: string;
    action?: string;
    type?: string;
    classCss?: string;
    disabled?: boolean;
    handler?: (item: any) => void;
}
