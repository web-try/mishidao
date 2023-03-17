
import { _decorator, Component, director, Node, Scene } from 'cc';
import { SceneEnum } from '../Enum/enum';
const { ccclass, property } = _decorator;
 
@ccclass('sceneManager')
export class sceneManager extends Component {

    onLoad () {
        director.preloadScene(SceneEnum.H1)
        director.preloadScene(SceneEnum.H2)
        director.preloadScene(SceneEnum.H3)
        director.preloadScene(SceneEnum.H4)
    }

    changeScene(e:Event, scene: string) {
        director.loadScene(scene as SceneEnum)
    }
    

   
}
