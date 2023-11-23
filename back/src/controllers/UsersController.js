const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UsersController{

    async create(request, response){

        try{
            const { name, email  } = request.body

            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                }, 
            })

            response.json(user)
            
        }catch (err) { 
            return response.status(409).send()
        }

         // Em caso de sucesso
         //return response.status(200)
    }

    async show(request, response){
        try{
            const users = await prisma.user.findMany();

            response.json(users)
            
        }catch (err) { 
            return response.status(409).send()
        }
    }

    async view(request, response){
        try{
            const users = await prisma.user.findFirst();

            response.json(users)
            
        }catch (err) { 
            return response.status(409).send()
        }
    }

    async delete(request, response){
        
        try{
            const { id } = request.params
            //const { id } = request.body
            console.log(`id: ${id}`)

            const deleteUser = prisma.user.delete({
                where: {
                    id: id,
                }
            })
            return response.status(200)

        }catch (err) { 
            return response.status(409).send()
        }

    }

    async update(request, response){
        try{
            
            const { name, email } = request.body
            const { id } = request.params
            //const id = request.user.id
            
            const result = await prisma.user.update({
                where: {
                    id: id,
                },
                data: {
                    name: name,
                    email: email,
                },
            });

        }catch (err) { 
            return response.status(409).send()
        }

    }
}

module.exports = UsersController