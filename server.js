const express = require('express')
const knex = require('./config/connet.knex')
const { Knex } = require('knex')
const router = require('./Router')


const app = express()


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());


app.use('/api',router)







app.get('/thai', async (req, res) => {
    const park = await knex.select().table('provinces')
    console.log(park)
    // return res.send('good').status(200)
})
// เพิ่ม
// app.post('/thai', async (req, res) => {
//     const { id, name } = req.body
//     const panta = await knex('geographies').insert({
//         id: id,
//         name: name
//     })
//     console.log(panta)
//     return res.status(200).send('เพิ่ม')
// })
// app.post('/thailand', async (req, res) => {
//     const keesongz = await knex.insert(
//         [
//             {id:'6'},
//             {name:'ภาคตับ'}
//         ]
//     ).into('geographies')
//      console.log(keesongz)
//     return res.status(200).send('เพิ่ม')
// })

app.post('/thailand',async (req,res)=>{
    const {id,name} = req.body
    const msi = await knex('geographies').insert({
        id:id,
        name:name
    })
  console.log(msi)
  return res.status(200).send('k')
})

// ค้นหาตามid
app.get('/thai/:id', async (req, res) => {
    // console.log(req.params.id)
    const park = await knex('provinces')
        .where('id', req.params.id)
    // สามารถใช้เครื่องหมาย > < = ได้ตามหลัง ที่ where 
    return res.status(200).send(park)
})
// แก้ไข
app.put('/thai/:id', async (req, res) => {
    const yotin = await knex('provinces')
        .where({
            id: req.params.id
        })
        .update({
            name_th: "กรุงเทพแก้ไข",
            //  pre_name:"ก็มาดิค้าบ"
        })
    return res.status(200).send('อัพเดทได้แล้วนะ')
})
// ลบ
app.delete('/thai/:id', async (req, res) => {
    const yotin = await knex('geographies')
        .where({
            id: req.params.id
        })
        .del()
    return res.status(200).send('ลบได้')
})
// join
app.get('/park', async (req, res) => {
    const yotin = await knex.select('*')
        .from('geographies')
        .join('provinces', { 'geographies.id': 'provinces.geographies_id' })
    console.log(yotin);
})

app.listen(8880, () => console.log('Startding'))