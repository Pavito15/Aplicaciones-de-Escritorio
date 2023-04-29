const router= require('express').Router(); 

const ControladorTareas = require ('./../controllers/tareas');

router.get('',ControladorTareas.listar);
router.get('/:id',ControladorTareas.ver);
router.post('', ControladorTareas.postTarea); 
router.put('/:id',ControladorTareas.putTarea);
router.delete('/:id',ControladorTareas.borrar);

module.exports=router;
/**
 * @swagger
 * /tarea:
 *  get:
 *    description: Obtener las tareas
 *    responses: 
 *      200:
 *        description: tareas del usuario
 *      404:
 *        description: no se encontraron tareas 
 * 
 */

/**
 * @swagger
 * /tareas/:id:
 *  get:
 *    description: Obtener una tarea id
 *    parameters: 
 *      - in: path
 *        name: id
 *        description: id de tarea
 *        schema:
 *          type: string
 *    responses: 
 *      200:
 *        description: La tarea con ese id
 *      404:
 *        description: La tarea no fue encontrada
 */

/**
 * @swagger
 * /tareas:
 *  post:
 *    description: Crear una nueva tarea
 *    parameters: 
 *      - in: body
 *        name: tarea
 *        description: Datos de la tarea
 *        schema:
 *          type: Object
 *          properties:
 *            titulo:
 *              type: string
 *            descripcion:
 *              type: string
 *            status:
 *              type: sritng
 *            fecha de creación:
 *              type: date
 *    responses: 
 *      200:
 *        description: La tarea fue creada
 *      400:
 *        description: La tarea no fue creada
 *      404:
 *        description: Faltaron datos
 */

/**
 * @swagger
 * /tareas/:id:
 *  put:
 *    description: Actualizar los datos de tarea
 *    parameters: 
 *      - in: path
 *        name: id
 *        description: el id actualizarlo
 *      - in : body
 *        name: tarea  
 *        description: Datos de la tarea en actualizacion
 *        schema:
 *          type: Object
 *          properties:
 *            titulo:
 *              type: string
 *            descripcion:
 *              type: string
 *            status:
 *              type: sritng
 *    responses: 
 *      200:
 *        description: La tarea fue actualizada
 *      400: 
 *        description: Los datos de no son correctos
 *      404:
 *        description: No se encontro tarea
 */
/**
 * @swagger
 * /tareas/:id:
 *  delete:
 *    description: Borrar una tarea por id
 *    parameters: 
 *      - in: path
 *        name: id
 *        description: El id de la tarea a eliminar
 *        schema:
 *          type: string
 *    responses: 
 *      200:
 *        description: Se elimino la tarea
 *      400: 
 *        description: Ocurrio un problema
 *      404:
 *        description: La tarea no fue encontrada
 */