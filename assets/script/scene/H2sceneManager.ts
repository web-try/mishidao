
import { _decorator, instantiate, Node, Prefab } from 'cc';
import { sceneManager } from './sceneManager';
import DataManager from '../Runtime/DataManager';
import { ItemStatusEnum, ItemTypeEnum } from '../Enum/enum';
const { ccclass, property } = _decorator;

 
@ccclass('H2sceneManager')
export class H2sceneManager extends sceneManager {
  
    @property(Node)
    KeyPoint: Node = null

    @property(Prefab)
    keyPrefab: Prefab = null

    render() {
        super.render()
        this.itemNode.destroyAllChildren()
        
        const keyitem = DataManager.Insatnce.items.find(i => i.type === ItemTypeEnum.key)
        if(keyitem && keyitem.status === ItemStatusEnum.Scene){
            const keyNode = instantiate(this.keyPrefab)
            this.itemNode.addChild(keyNode)
            this.itemNode.position = this.KeyPoint.getPosition()
        }
    }
}
