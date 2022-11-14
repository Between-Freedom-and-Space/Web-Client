const TYPES = {
    AuthenticateApi: Symbol.for("AuthenticateApi"),
    AuthAxiosInstance: Symbol.for("AuthAxiosInstance"),
    TokenRepository: Symbol.for("TokenRepository"),
    PasswordEncryptor: Symbol.for("PasswordEncryptor"),
    ResponseAdapterInterceptor: Symbol.for("ResponseAdapterInterceptor"),
    AuthTokenInterceptor: Symbol.for("AuthTokenInterceptor")
}

export default TYPES