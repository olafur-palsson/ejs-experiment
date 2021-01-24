import fs from 'fs'
import ejs from 'ejs'
import path from 'path'

export const render = (
  templatePath: string,
  data?: any
) => {
  const filePath = `${__dirname}/${templatePath}`
  const relative = (p) => {
    return `${__dirname}/${p}`
  }
  const stylePath = `${path.relative(process.cwd(), __dirname)}/${data?.stylePath || 'style.css'}`
  const template = fs.readFileSync(filePath, 'utf8')
  return ejs.render(template, {
    ...data,
    stylePath,
    p: relative,
    render
  })
}
