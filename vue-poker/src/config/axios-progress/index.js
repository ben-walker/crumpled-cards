import { loadProgressBar } from 'axios-progress-bar'
import { httpProgress } from '../axios'
import 'axios-progress-bar/dist/nprogress.css'

const options = {
  showSpinner: false
}

loadProgressBar(options, httpProgress)
