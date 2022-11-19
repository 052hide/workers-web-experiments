import type { Plugin } from '@nuxt/types'
import { getBus } from "piercing-library";

const plugin: Plugin = ({ app }) => {
  getBus().listen("href", (v: string) => {
    console.log({
      key: 'href',
      v
    })
    app.router?.push(v)
  });
}

export default plugin
