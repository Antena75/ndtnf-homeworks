import multer from 'multer'

const storage = multer.diskStorage({
    destination(req: any, file: any, cb: any){
        cb (null, 'public/books')
    },
    filename(req: any, file:any , cb: any){
        cb(null, `${file.originalname}`)
    }
})

export = multer({storage})