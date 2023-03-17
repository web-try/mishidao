import singleton from "../Base/singleton";
import { ItemStatusEnum, ItemTypeEnum } from "../Enum/enum";

interface IItem {
    status: ItemStatusEnum
    type: ItemTypeEnum
}

export default class DataManager extends singleton {

    static get Insatnce() {
        return super.GetInstance<DataManager>()
    }

    private _item: Array<IItem> = [
        {type: ItemTypeEnum.key, status: ItemStatusEnum.Scenc},
        {type: ItemTypeEnum.mail, status: ItemStatusEnum.Scenc}
    ]

    get item() {
        return this._item
    }

    set(newData) {
        this._item = newData
    }
}