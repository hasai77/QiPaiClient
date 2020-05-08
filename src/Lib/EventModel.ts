export default class EventModel {
    public EventListener: Array<Function> = [];

    public AddEventListener(fun: Function) {
        this.EventListener.push(fun);
    }

    public RemoveEventListener(fun: Function) {
        let Index = this.EventListener.indexOf(fun);
        this.EventListener.splice(Index, 1);
    }

    public Call(caller: any,data): boolean {
        for (let i = 0; i < this.EventListener.length; i++) {
            this.EventListener[i](caller,data,i);
        }
        return false
    }
}