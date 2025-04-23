//Layout---
import {HeaderOnly} from '~/layouts'

// routes
import Config from '~/config'

//Pages---
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'

const publicRoutes = [
    { path: Config.routes.home, component: Home},
    { path: Config.routes.following, component: Following},
    { path: Config.routes.profile, component: Profile},
    { path: Config.routes.upload, component: Upload, layout : HeaderOnly},
    { path: Config.routes.search, component: Search, layout : null}
]

const privateRoutes = [
    
]

export { publicRoutes, privateRoutes} 