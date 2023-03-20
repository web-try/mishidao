import singleton from "../Base/singleton";
import { EventEnum, ItemStatusEnum, ItemTypeEnum } from "../Enum/enum";
import EventManager from "./EventManager";

interface IItem {
    status: ItemStatusEnum
    type: ItemTypeEnum
}

export default class DataManager extends singleton {

    static get Insatnce() {
        return super.GetInstance<DataManager>()
    }

    private _item: Array<IItem> = [
        {type: ItemTypeEnum.key, status: ItemStatusEnum.Scene},
        {type: ItemTypeEnum.mail, status: ItemStatusEnum.Scene}
    ]

    get items() {
        return this._item
    }

    set items(newData) {
        this._item = newData
        EventManager.Instance.emit(EventEnum.Render)
    }
}