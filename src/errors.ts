export enum GebErrorTypes {
    DOES_NOT_OWN_HAVE_PROXY = 'The specified address does not own a proxy',
    NO_ETHSEND_WITH_MULTICALL = 'Multicall only supports functions of type "view"',
    INVALID_FUNCTION_INPUT = 'Invalid function input',
    SAFE_DOES_NOT_EXIST = 'The safe does not exist',
    INVALID_PROVIDER = 'The provider specified is not valid',
}

export class GebError extends Error {
    constructor(public code: GebErrorTypes, message?: string) {
        super(message ? code + ' -> ' + message : code)
        this.name = 'Geb Error'
    }
}
