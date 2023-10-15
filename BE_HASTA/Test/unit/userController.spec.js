const userController = require('../../src/controllers/userController')
const {mockRequest, mockResponse} = require('../testingUtils')

jest.mock('../../src/models/productModels', () => {
    return {
        getData: jest.fn().mockResolvedValue([
            {
            id: "ffbf266b-2193-4426-9e10-c883c995ea49",
            name: "dea",
            phone: "628",
            email: "dea@gmail.com",
            address: "kemayoran jakarta pusat",
            password: "knfioashfnasnjk",
            role: "user",
            isConfirm: true
            }
        ]),
    }
})

//TEST SHOW ALL USER

test('return res.json should show all data', async function() {

    const req = mockRequest()
    const res = mockResponse()
    const getData = [{
        id: "ffbf266b-2193-4426-9e10-c883c995ea49",
        name: "dea",
        phone: "628",
        email: "dea@gmail.com",
        address: "kemayoran jakarta pusat",
        password: "knfioashfnasnjk",
        role: "user",
        isConfirm: true
    }]

    await userController.getAllUsers(req, res)

    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({
        status : true,
        message: "data is displayed successfully",
        query: getData,
    })
})

//TEST SHOW DETAIL USER

// test('return res.json should show detail user', async function() {

//     const req = mockRequest(
//         id = "ffbf266b-2193-4426-9e10-c883c995ea49"
//     )
//     const res = mockResponse()
//     const id = req.params.id

//     const getData = [{
//         id: id,
//         name: "dea",
//         phone: "628",
//         email: "dea@gmail.com",
//         address: "kemayoran jakarta pusat",
//         password: "knfioashfnasnjk",
//         role: "user",
//         isConfirm: true
//     }]

//     await userController.getDetailUser(req, res)

//     expect(res.status).toBeCalledWith(200)
//     expect(res.json).toBeCalledWith({
//         status : true,
//         message: "data is displayed successfully",
//         query: getData,
//     })
// })