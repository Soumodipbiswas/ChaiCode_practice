import {Router} from 'expess'

const router = Router()
const controller = new TodoController()

router.get('/', controller.handleGetAllTodos)
router.get('/:id')

router.post('/')

router.put('/:id')
router.delete('/:id')

export default router