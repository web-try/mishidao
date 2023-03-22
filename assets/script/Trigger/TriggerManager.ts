
import { _decorator, Component, Label, Node, Sprite, SpriteFrame } from 'cc';
import { TriggerTypeEnum } from '../Enum/enum';
import { RenderManager } from '../Base/RenderManager';
const { ccclass } = _decorator;
 
@ccclass('TriggerManager')
export abstract class TriggerManager extends RenderManager {

    type: TriggerTypeEnum

    render(): void {
        
    }

    abstract handerCtrl(): void



}