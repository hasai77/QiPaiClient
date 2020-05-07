namespace Application {
    export module GameCommonInterface {
        export interface GameCommon {

            SetGameName(_GameName: string)

            GetGameRoomNumber(): string

            SetGameRoomNumber(GameRoomNumber: string)

            GetGamePlaying()

            SetGamePlaying(GamePlaying: string)

            GetGameMaxUserCount()

            SetGameMaxUserCount(GameMaxUserCount: number)

            GetGameMinUserCount()

            SetGameMinUserCount(GameMinUserCount: string)

            GetGameCurrentInning(): number

            SetGameCurrentInning(GameCurrentInning: number)

            GetGameMaxInning(): number

            SetGameMaxInning(GameMaxInning: number)
        }
    }
}
