
import { _decorator, Component, Node } from 'cc';
import { ItemStatusEnum, ItemTypeEnum } from '../Enum/enum';
import { itemManager } from './itemManager';
const { ccclass, property } = _decorator;
 
@ccclass('KeyitemManager')
export class KeyitemManager extends itemManager {

    laber = "信箱钥匙"

    type: ItemTypeEnum = ItemTypeEnum.key
}
