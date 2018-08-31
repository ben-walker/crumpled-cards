import { loadProgressBar } from 'axios-progress-bar'
import axios from '../axios'
import 'axios-progress-bar/dist/nprogress.css'

const options = {
  showSpinner: false
}

loadProgressBar(options, axios)
