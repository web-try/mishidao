
import { _decorator, Component, Node, Sprite, SpriteFrame } from 'cc';
import { ItemStatusEnum, ItemTypeEnum } from '../Enum/enum';
import DataManager from '../Runtime/DataManager';
import { RenderManager } from '../Base/RenderManager';
const { ccclass, property } = _decorator;
 
@ccclass('itemManager')
export class itemManager extends RenderManager {

    status: ItemStatusEnum

    type: ItemTypeEnum

    @property(SpriteFrame)
    sceneSF: SpriteFrame = null

    @property(SpriteFrame)
    Incentory: SpriteFrame = null

    onLoad() {
        super.onLoad()
        console.log(DataManager.Insatnce.items[0])
        this.node.on(Node.EventType.TOUCH_END, this.touch, this)
    }

    onDestroy() {
        super.onDestroy()
        this.node.off(Node.EventType.TOUCH_END, this.touch)
    }

    touch() {
        /**
         * 浅拷贝,只是把地址拷贝进来当item改变时数据会随着变动
         */
        const item = DataManager.Insatnce.items.find(i => i.type === this.type)

        if(!item) {
            return
        }

        if(item.status === ItemStatusEnum.Scene){
            item.status = ItemStatusEnum.Incentory
            DataManager.Insatnce.items = [...DataManager.Insatnce.items]
        }
    }

    /**
     * 渲染方法,当set DataManager.Insatnce.items时调用此方法判断此时物品状态并改变其值
     */
    render(){
        const status = DataManager.Insatnce.items.find(i => i.type === this.type)?.status
        const spriteComponent = this.getComponent(Sprite)

        switch(status) {
            case ItemStatusEnum.Scene:
                this.node.active = true
                spriteComponent.spriteFrame = this.sceneSF
                break;
            case ItemStatusEnum.Incentory:
                this.node.active = true
                spriteComponent.spriteFrame = this.Incentory
                break;
            case ItemStatusEnum.Disable:
                this.node.active = false
                break;
            default:
                break;
        }
    }
}