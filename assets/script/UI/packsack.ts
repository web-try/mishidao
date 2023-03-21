
import { _decorator, Button, Component, instantiate, Label, Node, Prefab } from 'cc';
import { ItemStatusEnum, ItemTypeEnum } from '../Enum/enum';
import { RenderManager } from '../Base/RenderManager';
import DataManager from '../Runtime/DataManager';
import { itemManager } from '../Item/itemManager';
const { ccclass, property } = _decorator;

@ccclass('packsack')
export class packsack extends RenderManager {

    @property(Label)
    laber: Label = null

    @property(Button)
    leftButton: Button = null

    @property(Button)
    rightButton: Button = null

    @property(Node)
    hand: Node = null

    /**
     * 背景板上的子节点
     */
    @property(Node)
    packsack: Node = null

    @property(Prefab)
    keyPrefab: Prefab = null

    @property(Prefab)
    mailPrefab: Prefab = null

    render() {
        this.packsack.destroyAllChildren()
        /**
         * 找到所有状态是在背包中的物品
         */
        const isTnventoryItems = DataManager.Insatnce.items.filter(i => i.status === ItemStatusEnum.Incentory)
        /**
         * 如果为0则不显示该节点
         */
        this.node.active = isTnventoryItems.length > 0
        if (isTnventoryItems.length) {
            /**
             * 判断当前背包中是否有物品
             */
            if (DataManager.Insatnce.curItemType) {
                /**
                 * 在DataManager中找到节点和节点信息
                 */
                const item = DataManager.Insatnce.items.find(i => i.type === DataManager.Insatnce.curItemType)
                /**
                 * 判断它的状态是否为在背包中
                 */
                if (item.status === ItemStatusEnum.Incentory) {
                    this.generateItem(DataManager.Insatnce.curItemType)
                } else {
                    /**
                     * 如果不在背包中则将找到的列表中的第一个生成在背包中
                     */
                    const type = isTnventoryItems[0].type
                    this.generateItem(type)
                    DataManager.Insatnce.curItemType = type
                }
            } else {
                /**
                 * 没有的话返回新
                 */
                const type = isTnventoryItems[0].type
                this.generateItem(type)
                DataManager.Insatnce.curItemType = type
            }
        }

        this.hand.active = Boolean(DataManager.Insatnce.curItemType) && DataManager.Insatnce.isSelect

        this.changeButton()
    }

    generateItem(type: ItemTypeEnum) {
        switch (type) {
            case ItemTypeEnum.key:
                const keyNode = instantiate(this.keyPrefab)
                this.packsack.addChild(keyNode)
                this.laber.string = keyNode.getComponent(itemManager).laber
                break;
            case ItemTypeEnum.mail:
                const mailNode = instantiate(this.mailPrefab)
                this.packsack.addChild(mailNode)
                this.laber.string = mailNode.getComponent(itemManager).laber
                break;
            default:
                break;
        }
    }

    /**
     * 是否为选择状态
     */
    handcrtl() {
        DataManager.Insatnce.isSelect = !DataManager.Insatnce.isSelect
    }

    /**
     * 切换图片 
     */
    handleftcrtl() {
        if(DataManager.Insatnce.curItemType === null) {
            return
        }

        const isTnventoryItems = DataManager.Insatnce.items.filter(i => i.status === ItemStatusEnum.Incentory)
        const index = isTnventoryItems.findIndex(i => i.type === DataManager.Insatnce.curItemType)
        if(index > 0){
            DataManager.Insatnce.isSelect = false
            DataManager.Insatnce.curItemType = isTnventoryItems[index - 1].type
        }
    }

    /**
     * 切换图片 
     */
    handrightcrtl() {
        if(DataManager.Insatnce.curItemType === null) {
            return
        }

        const isTnventoryItems = DataManager.Insatnce.items.filter(i => i.status === ItemStatusEnum.Incentory)
        const index = isTnventoryItems.findIndex(i => i.type === DataManager.Insatnce.curItemType)
        if(index < isTnventoryItems.length - 1){
            DataManager.Insatnce.isSelect = false
            DataManager.Insatnce.curItemType = isTnventoryItems[index + 1].type
        }
    }

    /**
     * 改变按钮是否为禁用状态
     */
    changeButton() {
        if(DataManager.Insatnce.curItemType === null) {
            this.leftButton.interactable = false
            this.rightButton.interactable = false
        }

        const isTnventoryItems = DataManager.Insatnce.items.filter(i => i.status === ItemStatusEnum.Incentory)
        const index = isTnventoryItems.findIndex(i => i.type === DataManager.Insatnce.curItemType)

        this.leftButton.interactable = index > 0

        this.rightButton.interactable = index < isTnventoryItems.length - 1
    }
}
