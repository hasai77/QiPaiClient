export default class PropModel {
    protected PropID: number
    //道具名称
    protected PropName: string
    //道具值
    protected PropNum: number
    //道具花色
    protected PropColor: number
    //道具排序
    protected PropSort: number
    //道具Tag
    protected PropTag: number
    //道具赖子标识
    protected PropWild: number

    public GetPropName(): string {
        return this.PropName
    }

    public SetPropName(PropName: string) {
        this.PropName = PropName
    }

    public GetPropNum(): number {
        return this.PropNum
    }

    public SetPropNum(PropNum: number) {
        this.PropNum = PropNum
    }

    public GetPropColor(): number {
        return this.PropColor
    }

    public SetPropColor(PropColor: number) {
        this.PropColor = PropColor
    }

    public GetPropSort(): number {
        return this.PropSort
    }

    public SetPropSort(PropSort: number) {
        this.PropSort = PropSort
    }

    public GetPropTag(): number {
        return this.PropTag
    }

    public SetPropTag(PropTag: number) {
        this.PropTag = PropTag
    }

    public GetPropWild(): number {
        return this.PropWild
    }

    public SetPropWild(PropWild: number) {
        this.PropWild = PropWild
    }
}