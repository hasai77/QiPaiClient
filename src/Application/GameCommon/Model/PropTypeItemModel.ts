export default class PropTypeItemModel {
    protected PropTypeID: number
    protected PropTypeName: string
    protected PropTypeSort: number

    public GetPropTypeID(): number {
        return this.PropTypeID
    }

    public SetPropTypeID(PropTypeID: number) {
        this.PropTypeID = PropTypeID
    }

    public GetPropTypeName(): string {
        return this.PropTypeName
    }

    public SetPropTypeName(PropTypeName: string) {
        this.PropTypeName = PropTypeName
    }

    public GetPropTypeSort(): number {
        return this.PropTypeSort
    }

    public SetPropTypeSort(PropTypeSort: number) {
        this.PropTypeSort = PropTypeSort
    }
}