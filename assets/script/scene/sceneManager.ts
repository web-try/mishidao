
import { _decorator, Component, director, instantiate, Node, Prefab, Scene } from 'cc';
import { SceneEnum } from '../Enum/enum';
import { RenderManager } from '../Base/RenderManager';
const { ccclass, property } = _decorator;

@ccclass('sceneManager')
export class sceneManager extends RenderManager {

    @property(Node)
    itemNode: Node = null

    @property(Prefab)
    packsackPrefab: Prefab = null

    start() {
        super.start()
        director.preloadScene(SceneEnum.H1)
        director.preloadScene(SceneEnum.H2)
        director.preloadScene(SceneEnum.H3)
        director.preloadScene(SceneEnum.H4)
        if(this.packsackPrefab){
           const packsackNode: Node = instantiate(this.packsackPrefab)
           this.node.addChild(packsackNode)
        }
    }

    changeScene(e: Event, scene: string) {
        director.loadScene(scene as SceneEnum)
    }

    render(): void {
        
    }
}
