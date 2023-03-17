
import { _decorator, Component, Node, SpriteFrame } from 'cc';
import { ItemStatusEnum, ItemTypeEnum } from '../Enum/enum';
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

    touch() {
        if(this.status === ItemStatusEnum.Scenc){
            this.status = ItemStatusEnum.Incentory
        }
    }
}