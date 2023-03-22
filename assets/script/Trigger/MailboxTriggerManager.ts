
import { _decorator, Component, Label, Node, Sprite, SpriteFrame } from 'cc';
import { ItemStatusEnum, ItemTypeEnum, TriggerStatusEnum, TriggerTypeEnum } from '../Enum/enum';
import { RenderManager } from '../Base/RenderManager';
import DataManager from '../Runtime/DataManager';
import { TriggerManager } from './TriggerManager';
const { ccclass, property } = _decorator;
 
@ccclass('MailboxTriggerManager')
export class MailboxTriggerManager extends TriggerManager {

    type:TriggerTypeEnum = TriggerTypeEnum.MailBox

    @property(Node)
    mailboxPeding: Node = null

    @property(Node)
    mailboxResolve: Node = null

    render(): void {
        super.render()
        const open = DataManager.Insatnce.mailboxStatus === TriggerStatusEnum.resolove
        this.mailboxPeding.active = !open
        this.mailboxResolve.active = open
    }

    handerCtrl(): void {
        if(DataManager.Insatnce.curItemType === ItemTypeEnum.key && DataManager.Insatnce.isSelect === true) {
            DataManager.Insatnce.isSelect = false
            DataManager.Insatnce.curItemType = null
            DataManager.Insatnce.items.find(i => i.type === ItemTypeEnum.key).status = ItemStatusEnum.Disable
            DataManager.Insatnce.items.find(i => i.type === ItemTypeEnum.mail).status = ItemStatusEnum.Scene
            DataManager.Insatnce.items = [...DataManager.Insatnce.items]
            DataManager.Insatnce.mailboxStatus = TriggerStatusEnum.resolove
        }
    }

}