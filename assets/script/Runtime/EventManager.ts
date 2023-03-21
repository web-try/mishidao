import singleton from "../Base/singleton"

interface IItem {
  func: Function
  ctx: unknown
}

export default class EventManager extends singleton {
  static get Instance() {
    return super.GetInstance<EventManager>()
  }

  private eventDic: Map<string, Array<IItem>> = new Map()

  on(eventName: string, func: Function, ctx?: unknown) {
    if (this.eventDic.has(eventName)) {
      this.eventDic.get(eventName).push({ func, ctx })
    } else {
      this.eventDic.set(eventName, [{ func, ctx }])
    }
  }

  off(eventName: string, func: Function, ctx) {
    if (this.eventDic.has(eventName)) {
      /**
       * findIndex找和传入的func同名的函数
       * splice一个删除索引位置的函数
       */
      const index = this.eventDic.get(eventName).findIndex(i => i.func === func && ctx === i.ctx)
      index > -1 && this.eventDic.get(eventName).splice(index, 1)
    }
  }

  emit(eventName: string, ...params: unknown[]) {
    if (this.eventDic.has(eventName)) {
      this.eventDic.get(eventName).forEach(({ func, ctx }) => {
        ctx ? func.apply(ctx, params) : func(...params)
      })
    }
  }

  clear() {
    this.eventDic.clear()
  }

}
