export interface SecurityVariableRepository {

    get(): string | null

    save(securityVariable: string): string

    clear(): string | null
}