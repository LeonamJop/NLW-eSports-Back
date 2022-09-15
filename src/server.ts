import express from 'express';

const app = express();

app.get('/games', (request, response) => {
    return response.json([]);
});

app.post('/ads', (request, response) => {
    return response.status(201).json([]);
})

app.get('/games/:id/ads', (request, reponse) => {
    return reponse.json([
        {
            id: 1,
            nome: "Anúncio 1",
        },{
            id: 2,
            nome: "Anúncio 2",
        },{
            id: 3,
            nome: "Anúncio 3",
        },{
            id: 4,
            nome: "Anúncio 4",
        },
    ])
});

app.get('/games/:id/discord', (request, reponse) => {
    return reponse.json([])
});

app.listen(3333)
