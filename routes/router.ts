import {Router, Request, Response} from 'express';

// Construcción de los endpoin
const router = Router();

// Endpoint localhost:5000/mensajes  --> GET
router.get('/mensajes', (req: Request, res: Response) => {

    res.json({
        ok: true,
        mensaje: 'Todo está bien'
    });

});

// Endpoint localhost:5000/mensajes  --> POST
router.post('/mensajes', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok: true,
        mensaje: 'POST listo',
        cuerpo: cuerpo,
        de: de
    });
});

// Endpoint localhost:5000/mensajes  --> POST que lee los datos de la URL
router.post('/mensajes/:id', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    res.json({
        ok: true,
        mensaje: 'POST listo',
        cuerpo: cuerpo,
        de: de,
        id: id
    });
});



export default router;
