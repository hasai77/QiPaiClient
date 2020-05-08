import Queue from "./Queue";

export default class QueueRun extends Queue<{ Fun: Function, Time: number }> {
    private TimeID = 0;

    public Add(fun: Function, time: number) {
        this.push({
            Fun: fun,
            Time: time
        })
    }

    public Run() {
        let NextData = this.pop();
        if (NextData) {
            this.TimeID = setTimeout(() => {
                NextData.Fun()
            }, NextData.Time)
        }
    }

    public Clear() {
        clearTimeout(this.TimeID);
    }
}