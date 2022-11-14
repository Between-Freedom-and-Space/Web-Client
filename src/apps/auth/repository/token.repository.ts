import {Tokens} from "./token-repository.types";

export interface TokenRepository {

    updateAccessToken(accessToken: string): Tokens | null

    saveTokens(tokens: Tokens): void

    getTokens(): Tokens | null

    clear(): Tokens | null
}