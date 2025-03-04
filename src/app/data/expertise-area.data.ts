import { ExpertiseAreaSchema } from "@data/schema/expertise-area.schema";
import { site, api, mobile, monitor, speed, search } from '@icon/regular.icon'

const expertiseAreaData: ExpertiseAreaSchema[] = [
  {
    icon: site,
    percent: '70%',
    name: 'Web Development'
  },
  {
    icon: api,
    percent: '60%',
    name: 'API Development'
  },
  {
    icon: mobile,
    percent: '70%',
    name: 'Mobile Development'
  },
  {
    icon: monitor,
    percent: '80%',
    name: 'Back End'
  },
  {
    icon: speed,
    percent: '75%',
    name: 'Performance Optimization'
  },
  {
    icon: search,
    percent: '20%',
    name: 'Unit Testing'
  },
]

export default expertiseAreaData
