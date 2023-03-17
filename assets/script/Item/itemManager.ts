
import { _decorator, Component, Node, SpriteFrame } from 'cc';
import { ItemStatusEnum, ItemTypeEnum } from '../Enum/enum';
import DataManager from '../Runtime/DataManager';
const { ccclass, property } = _decorator;
 
@ccclass('itemManager')
export class itemManager extends Component {

    status: ItemStatusEnum

    type: ItemTypeEnum

    @property(SpriteFrame)
    sceneSF: SpriteFrame = null

    @property(SpriteFrame)
    Incentory: SpriteFrame = null

    onLoad() {
        this.node.on(Node.EventType.TOUCH_END, this.touch, this)
    }

    onDestroy() {
        this.node.off(Node.EventType.TOUCH_END, this.touch)
    }

    touch() {
        const item = DataManager.Insatnce.items.find(i => i.type === this.type)

        if(!item) {
            return
        }

        if(item.status === ItemStatusEnum.Scenc){
            item.status = ItemStatusEnum.Incentory
            DataManager.Insatnce.items = [...DataManager.Insatnce.items]
        }
    }
}