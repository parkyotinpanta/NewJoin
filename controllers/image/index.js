const knex = require('../../config/connet.knex')

const read = async (req, res) => {
    const allread = await knex.select().table('provinces')
    console.log(allread)
    return res.status(200).send('ได้')
}
// raw 
const FindProvincesByName = async(req,res)=>{
    const{name_th} = req.body
    const park = 'yotin'
    const str = `${park} panta` ``
    console.log(str);
    
    
    // const find = await knex('provinces').whereLike('name_th',`%${name_th}%`)
    // console.log(find);
const sqlString = ` SELECT * FROM provinces WHERE name_th LIKE ? `;
const searchTerm =`%${name_th}%` ;
const search = await knex.raw(sqlString,searchTerm)
const searchsend = search[0][0]

return res.status(200).send(searchsend)
    
    
}
const insert = async (req, res) => {
    const { code, name_th, name_en, geography_id } = req.body
    const status = await knex('provinces').insert({
        code: code,
        name_th: name_th,
        name_en: name_en,
        geography_id: geography_id
    }).then(() => {
        return 200
    }).catch(() => {
        return 400
    })

    return res.status(status).send(status)
}
const update = async (req, res) => {
    const { id, name_th } = req.body
    const status = await knex('provinces')
        .where('id', '=', id)
        .update({ "name_th": name_th })
        .then((item) => {
            if (item == 1) {
                return 200
            } else {
                return 400
            }
        }).catch((err) => {
            console.log(err)
            return 400
        })

    return res.status(status).send(status)
}
const remove = async (req, res) => {
    console.log(req.body)
}



module.exports = { read,FindProvincesByName, insert, update, remove }