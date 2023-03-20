
export enum SceneEnum {
    H1 = 'H1',
    H2 = 'H2',
    H3 = 'H3',
    H4 = 'H4',
}

/**
 * 物品状态
 */
export enum ItemStatusEnum {
    /**
     * @Scene 在场景
     */
    Scene = "Scene",
    /**
     * @Incentory 在背包
     */
    Incentory = "Incentory",
    /**
     * @Disable 用完后
     */
    Disable = "Disable"
}

export enum ItemTypeEnum {
    key = "key",
    mail = "mail"
}

export enum EventEnum {
    Render = "Render"
}