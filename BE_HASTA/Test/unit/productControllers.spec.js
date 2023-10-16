const productControllers = require('../../src/controllers/productControllers')
const {mockRequest, mockResponse} = require('../testingUtils')
jest.mock('../../src/models/productModels', () => {
    return {
        showAll: jest.fn().mockResolvedValue({
            // Mock the user data as per your needs
            id: 4,
            name: "gula aren",
            price: 18000,
            stock: 100,
            category: "coffe",
            image: "https://source.unsplash.com/random/300×300/?drink?coffe",
            statusStock: true,
            statusProduct: true,
            description: "kopi gula aren dengan susu yang fresh",
            createdAt: "2023-10-09T04:24:37.007Z"
        }),
        showById: jest.fn().mockResolvedValue({
            // Mock the user data as per your needs
            id: 4,
            name: "gula aren",
            price: 18000,
            stock: 100,
            category: "coffe",
            image: "https://source.unsplash.com/random/300×300/?drink?coffe",
            statusStock: true,
            statusProduct: true,
            description: "kopi gula aren dengan susu yang fresh",
            createdAt: "2023-10-09T04:24:37.007Z"
        }),
        update: jest.fn().mockResolvedValue({
            // Mock the user data as per your needs
            id: 4,
            name: "gula aren update",
            price: 18000,
            stock: 100,
            category: "coffe",
            image: "https://source.unsplash.com/random/300×300/?drink?coffe",
            statusStock: true,
            statusProduct: true,
            description: "kopi gula aren dengan susu yang fresh",
            createdAt: "2023-10-09T04:24:37.007Z"
        }),
        delete: jest.fn().mockResolvedValue(1),
        create: jest.fn().mockResolvedValue({
            // Mock the user data as per your needs
            id: 4,
            name: "gula aren",
            price: 18000,
            stock: 100,
            category: "coffe",
            image: "https://source.unsplash.com/random/300×300/?drink?coffe",
            statusStock: true,
            statusProduct: true,
            description: "kopi gula aren dengan susu yang fresh",
            createdAt: "2023-10-09T04:24:37.007Z"
        }),
    };
});

// TEST SHOW ALL

test('return res.json should show all data', async function() {
    const data = {
        id: 4,
        name: "gula aren",
        price: 18000,
        stock: 100,
        category: "coffe",
        image: "https://source.unsplash.com/random/300×300/?drink?coffe",
        statusStock: true,
        statusProduct: true,
        description: "kopi gula aren dengan susu yang fresh",
        createdAt: "2023-10-09T04:24:37.007Z"
    }

    const req = mockRequest()
    const res = mockResponse()

    await productControllers.showAll(req, res)

    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({
        status : 200,
        query: data
    })
})

// TEST SHOW BY ID

test('return res.json should show by id', async function() {

    const req = mockRequest({
        id : 4
    })
    const res = mockResponse()
    const {id} = req.body
    
    const data = {
        id: id ,
        name: "gula aren",
        price: 18000,
        stock: 100,
        category: "coffe",
        image: "https://source.unsplash.com/random/300×300/?drink?coffe",
        statusStock: true,
        statusProduct: true,
        description: "kopi gula aren dengan susu yang fresh",
        createdAt: "2023-10-09T04:24:37.007Z"
    }

    await productControllers.showById(req, res)

    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({
        status : 200,
        query: data
    })
})

// TEST UPDATE DATA

test('return res.json should update data', async function() {

    const req = mockRequest({
        id : 4,
        name : 'gula aren update'
    })
    const res = mockResponse()
    const {id, name} = req.body
    
    const data = {
        id: id ,
        name: name,
        price: 18000,
        stock: 100,
        category: "coffe",
        image: "https://source.unsplash.com/random/300×300/?drink?coffe",
        statusStock: true,
        statusProduct: true,
        description: "kopi gula aren dengan susu yang fresh",
        createdAt: "2023-10-09T04:24:37.007Z"
    }

    await productControllers.update(req, res)

    expect(res.status).toBeCalledWith(201)
    expect(res.json).toBeCalledWith({
        status : 201,
        message : "Product Successfully Update",
        query: data
    })
})

// TEST DELETE

test('return res.json should update data', async function() {

    const req = mockRequest({
        id : 4,
    })
    const res = mockResponse()
    const {id, name} = req.body
    
    const data = 1

    await productControllers.delete(req, res)

    expect(res.status).toBeCalledWith(201)
    expect(res.json).toBeCalledWith({
        status : 201,
        message : "Product Successfully Deleted",
        query: data
    })
})

// TEST CREATE

test('return res.json should create data', async function() {

    const req = mockRequest({
        id : 4,
        name: "gula aren",
        price: 18000,
        stock: 100,
        category: "coffe",
        image: "https://source.unsplash.com/random/300×300/?drink?coffe",
        statusStock: true,
        statusProduct: true,
        description: "kopi gula aren dengan susu yang fresh",
        createdAt: "2023-10-09T04:24:37.007Z"
    })
    const res = mockResponse()
    const data = req.body

    await productControllers.create(req, res)

    expect(res.status).toBeCalledWith(201)
    expect(res.json).toBeCalledWith({
        status : 201,
        message : "Product Successfully Added",
        query: data
    })
})

