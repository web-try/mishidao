
import { _decorator, Component, Node } from 'cc';
import { ItemStatusEnum, ItemTypeEnum } from '../Enum/enum';
import { itemManager } from './itemManager';
const { ccclass, property } = _decorator;
 
@ccclass('MailitemManager')
export class MailitemManager extends itemManager {
   
    laber = "邮票"

    type: ItemTypeEnum = ItemTypeEnum.mail
}
