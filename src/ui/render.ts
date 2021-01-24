import fs from 'fs'
import ejs from 'ejs'
import path from 'path'

export const render = (
  templatePath: string,
  data?: any
) => {
  const filePath = `${__dirname}/${templatePath}`
  const stylePath = `${path.dirname(filePath)}/${data?.stylePath || 'style.css'}`
  const styleExists = fs.existsSync(stylePath)
  const styles = styleExists ? fs.readFileSync(stylePath, 'utf8') : ''
  const template = fs.readFileSync(filePath, 'utf8')
  return ejs.render(`
    ${template}`,
    {
      ...data,
      styles,
      render
    })
}
