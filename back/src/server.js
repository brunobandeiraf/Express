const express = require('express')
const cors = require("cors")

// Index das routes
const routes = require('./routes')

const app = express()
app.use(express.json())

app.use(routes)
app.use(cors())


// app.use((error, request, response, next) => {
//     // Se erro gerado pelo cliente
//     if(error instanceof AppError){
//         return response.status(error.statusCode).json({
//             status: "error",
//             message: error.message
//         });
//     }
//     // Debugar o error, se preciso
//     console.error(error);
    
//     // Se erro gerado pelo servidor
//     return response.status(500).json({
//         status: "error",
//         message: "Internal server error",
//     });
// });

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))

