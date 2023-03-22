import singleton from "../Base/singleton";
import { EventEnum, ItemStatusEnum, ItemTypeEnum, TriggerStatusEnum } from "../Enum/enum";
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

    private _mailboxStatus = TriggerStatusEnum.Panding

    private _grandmaStatus = TriggerStatusEnum.Panding

    private _dialogindex: number = -1


    private _item: Array<IItem> = [
        {type: ItemTypeEnum.key, status: ItemStatusEnum.Scene},
        {type: ItemTypeEnum.mail, status: ItemStatusEnum.Disable}
    ]

    get dialogindex() {
        return this._dialogindex
    }

    get grandmaStatus() {
        return this._grandmaStatus
    }

    get mailboxStatus() {
        return this._mailboxStatus
    }

    get curItemType() {
        return this._curItemType
    }

    get isSelect() {
        return this._isSelect
    }

    get items() {
        return this._item
    }

    set dialogindex(newData) {
        this._dialogindex = newData
        this.rander()
    }

    set grandmaStatus(newData) {
        this._grandmaStatus = newData
        this.rander()
    }

    set mailboxStatus(newData) {
        this._mailboxStatus = newData
        this.rander()
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