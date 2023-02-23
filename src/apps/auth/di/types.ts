const TYPES = {
    AuthenticateApi: Symbol.for("AuthenticateApi"),
    MailingApi: Symbol.for("MailingApi"),
    AuthAxiosInstance: Symbol.for("AuthAxiosInstance"),
    TokenRepository: Symbol.for("TokenRepository"),
    SecurityVariableRepository: Symbol.for("SecurityVariableRepository"),
    PasswordEncryptor: Symbol.for("PasswordEncryptor"),
    ResponseAdapterInterceptor: Symbol.for("ResponseAdapterInterceptor"),
    AuthTokenInterceptor: Symbol.for("AuthTokenInterceptor"),
    LoggingRequestInterceptor: Symbol.for("LoggingRequestInterceptor"),
    LoggingResponseInterceptor: Symbol.for("LoggingResponseInterceptor"),
    SecurityVariableGenerator: Symbol.for("SecurityVariableGenerator")
}

export default TYPES