import supertest from 'supertest'
import { app } from '../../src'
import mongoose from 'mongoose'
import { UserService } from '../../src/services/userService'
import { stat } from 'fs'

const userId = new mongoose.Types.ObjectId().toString()
const email = "e.o@gmail.com"
const socketId = "4522400AASWEDFRE1234"

export const userPayload = {
    userId: userId,
    socketId: socketId,
    email: email
}

const userService = new UserService

describe("user", () => {
        describe("given users does exist", () => {
            it("should return a 200", async() => {
                const productId = 'product-123'

                await supertest(app).get(`/user/get-all`)
                .expect(200);
            })
        })

        describe.skip("add a new user", () => {
            it("should return a 201", async() => {
                //const user = await userService.AddUser(userPayload)
                
                const userMock = jest
                .spyOn(userService, 'AddUser')
                // @ts-ignore
                .mockReturnValueOnce(userPayload)

                const {statusCode, body} = await supertest(app)
                .post(`/user/create`)
                
                expect(statusCode).toBe(201);
                
                //expect(body).toEqual(userPayload)

                expect(userMock).toHaveBeenCalledWith
            })
        })
})