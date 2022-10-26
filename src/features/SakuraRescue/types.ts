export type SakuraDangerProps = {
    username?: string
    persistUsername: (username: string) => void;
    disableButton: boolean
}

export type CounterProps = {
    username: string
    count: number
}