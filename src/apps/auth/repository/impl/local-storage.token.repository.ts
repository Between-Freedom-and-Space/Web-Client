import {injectable} from "inversify";
import { Tokens } from "../token-repository.types";
import {TokenRepository} from "../token.repository";

@injectable()
export class LocalStorageTokenRepository implements TokenRepository {

    private static readonly ACCESS_TOKEN_KEY = 'access_token_key'
    private static readonly REFRESH_TOKEN_KEY = 'refresh_token_key'

    private readonly storage = window.localStorage

    public getTokens(): Tokens | null {
        const accessToken = this.getAccessToken()
        const refreshToken = this.getRefreshToken()

        if (accessToken == null || refreshToken == null) {
            return null
        }

        return  { accessToken, refreshToken }
    }

    public saveTokens(tokens: Tokens): void {
        this.setAccessToken(tokens.accessToken)
        this.setRefreshToken(tokens.refreshToken)
    }

    public updateAccessToken(accessToken: string): Tokens | null {
        const refreshToken = this.getRefreshToken()
        if (refreshToken == null) {
            return null
        }

        this.setAccessToken(accessToken)

        return { accessToken, refreshToken }
    }

    public clear(): Tokens | null {
        const accessToken = this.getAccessToken()
        const refreshToken = this.getRefreshToken()
        this.storage.removeItem(LocalStorageTokenRepository.ACCESS_TOKEN_KEY)
        this.storage.removeItem(LocalStorageTokenRepository.REFRESH_TOKEN_KEY)

        if (accessToken == null || refreshToken == null) {
            return null
        }

        return { accessToken, refreshToken }
    }

    private getAccessToken(): string | null {
        return this.storage.getItem(LocalStorageTokenRepository.ACCESS_TOKEN_KEY)
    }
    private getRefreshToken(): string | null {
        return this.storage.getItem(LocalStorageTokenRepository.REFRESH_TOKEN_KEY)
    }

    private setAccessToken(accessToken: string) {
        this.storage.setItem(LocalStorageTokenRepository.ACCESS_TOKEN_KEY, accessToken)
    }

    private setRefreshToken(refreshToken: string) {
        this.storage.setItem(LocalStorageTokenRepository.REFRESH_TOKEN_KEY, refreshToken)
    }
}