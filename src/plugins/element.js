import Vue from 'vue'
import { Button } from 'element-ui'
import { Form,FormItem} from 'element-ui'
import { Input } from 'element-ui'
import { Message} from 'element-ui'
import { Container, Header,Aside, Main} from 'element-ui'
import { Menu, Submenu, MenuItem} from 'element-ui'
import { Breadcrumb, BreadcrumbItem} from 'element-ui'
import { Card} from 'element-ui'
import { Row, Col} from 'element-ui'
import { Table, TableColumn} from 'element-ui'
import { Switch} from 'element-ui'
import { Tooltip} from 'element-ui'
import { Pagination} from 'element-ui'
import { Dialog} from 'element-ui'
import { MessageBox } from 'element-ui'
import { Tag } from 'element-ui'
import { Tree } from 'element-ui'
import { Select, Option } from 'element-ui'
import { Cascader } from 'element-ui'
import { Alert } from 'element-ui'
import { Tabs,TabPane} from 'element-ui'
import { Steps, Step} from 'element-ui'
import { CheckboxGroup, Checkbox} from 'element-ui'
import { Upload} from 'element-ui'
import { Timeline,TimelineItem} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Steps)
Vue.use(Step)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Upload)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
