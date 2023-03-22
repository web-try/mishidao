
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
    /**
     * 事件类型,渲染
     */
    Render = "Render"
}

export enum TriggerTypeEnum {
    MailBox = "MailBox",
    grandma = "grandma"
}

export enum TriggerStatusEnum {
    /**
     * 关闭状态
     */
    Panding = "Panding",
    /**
     * 打开状态
     */
    resolove = "resolove"
}