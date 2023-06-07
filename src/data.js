import photoSnapDesktop from './assets/images/photoSnapDesktop.png'
import photoSnapPhone from './assets/images/photoSnapPhone.png'
import gptDesktop from './assets/images/gptDesktop.png'
import gptPhone from './assets/images/gptPhone.png'
import kanbanDesktop from './assets/images/kanban-desktop.png'
import kanbanPhone from './assets/images/kanban-mobile.png'
import sneakersDesktop from './assets/images/sneakers-desktop.png'
import sneakersPhone from './assets/images/sneakers-mobile.png'
import sunnysideDesktop from './assets/images/sunnyside-desktop.png'
import sunnysidePhone from './assets/images/sunnyside-mobile.png'


export const projects = [
  {
    name: 'Kanban',
    description: 'A task management app, allowing users to work on multiple projects. This app has drag and drop fuctionality to change the state of each task along with two different themes.',
    github: 'https://github.com/anmol1468/kanban',
    site: 'https://moonlit-sorbet-071bce.netlify.app/',
    phone: kanbanPhone,
    desktop: kanbanDesktop,
    index: 1
  },
  {
    name: 'PhotoSnap',
    description: 'Photosnap is a multi-page website. I used react-router-dom for the navigation throughout the pages.',
    github: 'https://github.com/anmol1468/PhotoSnap',
    site: 'https://blissful-hawking-f1151b.netlify.app/',
    phone: photoSnapPhone,
    desktop: photoSnapDesktop,
    index: 2
  },
  {
    name: 'Sneakers',
    description: 'This is a fully responsive product page for an E-commerce website, showcasing the product and allowing users to put different quantities in the shopping cart.',
    github: '#',
    site: 'https://wizardly-banach-063ca6.netlify.app/',
    phone: sneakersPhone,
    desktop: sneakersDesktop,
    index: 3
  },
  {
    name: 'Sunnyside',
    description: 'This is just a simple landing page website',
    github: 'https://github.com/anmol1468/sunnyside',
    site: 'https://frolicking-kelpie-09265a.netlify.app/',
    phone: sunnysidePhone,
    desktop: sunnysideDesktop,
    index: 4
  },
  {
    name: 'GPT-3',
    description: 'Just a landing page too',
    site: 'https://tender-minsky-16cb7e.netlify.app/',
    github: 'https://github.com/anmol1468/jpt3',
    phone: gptPhone,
    desktop: gptDesktop,
    index: 5
  }
]