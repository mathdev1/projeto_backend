import {FastifyRequest, FastifyReply} from "fastify";
import {CreateCustomerService} from '../services/services'

class CreateCustomerController {
    async handle (request:FastifyRequest,reply:FastifyReply){   

        const {image} = request.body as { image: string}
        console.log(image);
        const customerService = new CreateCustomerService()
        const customer = await customerService.execute();

        reply.send(customer)


    }
}

export {CreateCustomerController}