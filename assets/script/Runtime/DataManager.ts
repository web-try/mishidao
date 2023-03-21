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

    private _curItemType: ItemTypeEnum|null

    private _isSelect: boolean = false

    private _item: Array<IItem> = [
        {type: ItemTypeEnum.key, status: ItemStatusEnum.Scene},
        {type: ItemTypeEnum.mail, status: ItemStatusEnum.Incentory}
    ]

    get curItemType() {
        return this._curItemType
    }

    get isSelect() {
        return this._isSelect
    }

    get items() {
        return this._item
    }

    set isSelect(newData) {
        this._isSelect = newData
        this.rander()
    }

    set curItemType(newData) {
        this._curItemType = newData
        this.rander()
    }

    set items(newData) {
        this._item = newData
        this.rander()
    }

    rander() {
        EventManager.Instance.emit(EventEnum.Render)
    }
}