import { _decorator, Component, Label, Node, Sprite, SpriteFrame } from 'cc';
import { ItemStatusEnum, ItemTypeEnum, TriggerStatusEnum, TriggerTypeEnum } from '../Enum/enum';
import { RenderManager } from '../Base/RenderManager';
import DataManager from '../Runtime/DataManager';
import { TriggerManager } from './TriggerManager';
const { ccclass, property } = _decorator;
 
@ccclass('grandmaManager')
export class grandmaManager extends TriggerManager {

    type:TriggerTypeEnum = TriggerTypeEnum.grandma

    @property(Node)
    laberNode: Node = null

    @property(Label)
    laber: Label = null

    private readonly dialogListA: Array<string> = [ 
        "我年纪大了，很多事情想不起来了。",
        "你是谁？算了，我也不在乎你是谁。你能帮我找到信箱的钥匙吗？",
        "老头子说最近会给我寄船票过来，叫我和他一起出去看看。虽然我没有什么兴趣...",
        "他折腾了一辈子，不是躲在楼上捣鼓什么时间机器，就是出海找点什么东西。",
        "这些古怪的电视节目真没有什么意思。",
        "老头子说这个岛上有很多秘密，其实我知道，不过是岛上的日子太孤独，他找点事情做罢了。",
        "人嘛，谁没有年轻过。年轻的时候...算了，不说这些往事了。",
        "老了才明白，万物静默如迷。"
    ]

    private readonly dialogListB: Array<string> = [ 
        "没想到老头子的船票寄过来了，谢谢你。",
    ]

    render(): void {
        super.render()
        if(DataManager.Insatnce.dialogindex === -1) {
            this.laberNode.active = false
            return
        }
        
        this.laberNode.active = true
        if(DataManager.Insatnce.grandmaStatus === TriggerStatusEnum.Panding) {
            this.laber.string = this.dialogListA[DataManager.Insatnce.dialogindex]
        } else if(DataManager.Insatnce.grandmaStatus === TriggerStatusEnum.resolove) {
            this.laber.string = this.dialogListB[DataManager.Insatnce.dialogindex]
        }
    }

    handerCtrl(): void {

        if(DataManager.Insatnce.grandmaStatus === TriggerStatusEnum.Panding) {
            if(DataManager.Insatnce.curItemType === ItemTypeEnum.mail && DataManager.Insatnce.isSelect === true) {
                DataManager.Insatnce.isSelect = false
                DataManager.Insatnce.curItemType = null
                DataManager.Insatnce.items.find(i => i.type === ItemTypeEnum.mail).status = ItemStatusEnum.Disable
                DataManager.Insatnce.items = [...DataManager.Insatnce.items]
                DataManager.Insatnce.grandmaStatus = TriggerStatusEnum.resolove
                DataManager.Insatnce.dialogindex = 0
                return
            }
            if(DataManager.Insatnce.dialogindex < this.dialogListA.length -1) {
                DataManager.Insatnce.dialogindex++
            }else{
                DataManager.Insatnce.dialogindex = -1
            }    
        }else {
            if(DataManager.Insatnce.dialogindex < this.dialogListB.length -1) {
                DataManager.Insatnce.dialogindex++
            }else{
                DataManager.Insatnce.dialogindex = -1
            }
        }

        
    }

}