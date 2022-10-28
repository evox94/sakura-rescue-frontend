export type SakuraDangerProps = {
    username?: string
    attemptSavingHandler: (username: string) => void;
    disableButton: boolean,
    count: number
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
    genin : Array<string>
    success: boolean
}