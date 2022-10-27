export type SakuraDangerProps = {
    username?: string
    attemptSavingHandler: (username: string) => void;
    disableButton: boolean
}

export type CounterProps = {
    username: string
    count: number
}

export type MissionReportProps = {
    report: MissionReport
    clearMissionReport: () => void;
}

export type MissionReport = {
    jounin: string
    genins : Array<string>
}