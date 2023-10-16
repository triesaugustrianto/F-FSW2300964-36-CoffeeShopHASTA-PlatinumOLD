const mockRequest = (body = {}, params = {}, query = {}) => {
    return {
        body, params, query
    }
}

const mockResponse = () => {
    const res = {}
    res.json = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)

    return res
}

module.exports = {
    mockRequest, mockResponse
}