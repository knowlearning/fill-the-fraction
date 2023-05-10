import Editor from './Editor.vue'
import Player from './Player.vue'
import './main.css'
import { browserAgent, vuePersistentComponent } from '@knowlearning/agents'

window.Agent = browserAgent()

const url = new URL(window.location.href)

const params = url.searchParams
if (params.get('numerator')) {
  const props = {
    numerator: parseInt(params.get('numerator')),
    denominator: parseInt(params.get('denominator'))
  }
  vuePersistentComponent(Player, props)
}
else {
  vuePersistentComponent(Editor)
}