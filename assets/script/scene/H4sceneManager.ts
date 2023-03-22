
import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { sceneManager } from './sceneManager';
import DataManager from '../Runtime/DataManager';
import { ItemStatusEnum, ItemTypeEnum } from '../Enum/enum';
const { ccclass, property } = _decorator;

 
@ccclass('H4sceneManager')
export class H4sceneManager extends sceneManager {
    @property(Node)
    mailPoint: Node = null

    @property(Prefab)
    mailPrefab: Prefab = null

    render() {
        super.render()
        this.itemNode.destroyAllChildren()
        
        const mailitem = DataManager.Insatnce.items.find(i => i.type === ItemTypeEnum.mail)
        if(mailitem && mailitem.status === ItemStatusEnum.Scene){
            const keyNode = instantiate(this.mailPrefab)
            this.itemNode.addChild(keyNode)
            this.itemNode.position = this.mailPoint.getPosition()
        }
    }
}

