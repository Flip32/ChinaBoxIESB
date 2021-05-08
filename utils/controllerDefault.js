/**
 * @author Grupo Pós IESB (Filipe, Luiz e Natan)
 * Classe default para CRUD 
 * */


class ControllerDefault {

    constructor(validationSchema, model) {
        this.validationSchema = validationSchema
        this.model = model
    }

    index = async (req, res) => {
        try {

            const data = await this.model.find({})
            return res.json(data)

        } catch (e) {
            return res.status(500)
        }
    }

    store = async (req, res) => {

        if (!(await this.validationSchema.isValid(req.body))) {
            return res.status(400).json({ error: 'Problema na validação dos campos.' })
        }

        try {
            const data = await this.model.create(req.body)
            return res.json(data)
        } catch (e) {
            console.log('Deu ruim ao salvar registro. ', e, this.model)
            return res.status(500)
        }
    }


    indexOne = async (req, res) => {
        
        const { id } = req.params

        try {

            const registro = await this.model.findById(id)

            if (!registro) return res.status(404).json({ error: 'Registro não encontrato' })

            return res.json(registro)

        } catch (e) {
            console.log('Deu ruim ao indexar um registro. ', e, this.model)
            return res.status(500)
        }
    }

    erase = async (req, res) => {
        
        const { id } = req.params

        try {
            
            const registro = await this.model.findById(id)

            if (!registro) return res.status(404).json({ error: "Registro não encontrado" })

            await this.model.remove({ _id: id })

            return res.json({ message: 'Registro apagado com sucesso' })

        } catch (e) {
            console.log('Problema ao tentar apagar o registro. ', e, this.model)
            return res.status(500)
        }
    }

    updateOne = async (req, res, next) => {
        const { id } = req.params
        const body = req.body
    }

}

module.exports = ControllerDefault