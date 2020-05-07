namespace Application {
    export module GameCommonInterface {
        export interface Prop {
            GetPropName(): string

            SetPropName(PropName: string)

            GetPropNum(): number

            SetPropNum(PropNum: number)

            GetPropColor(): number

            SetPropColor(PropColor: number)

            GetPropSort(): number

            SetPropSort(PropSort: number)

            GetPropTag(): number

            SetPropTag(PropTag: number)

            GetPropWild(): number

            SetPropWild(PropWild: number)
        }
    }
}