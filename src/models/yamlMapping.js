import { onChange } from "@/models/helpers";
import yamlToGo from '@/services/yaml-to-go'
import { ALL, YAML, DB,XORM,GORM,FORM, Config, Nested } from '@/services/js-options'

const innerState = {
  treeData: [{
    ...ALL,
    children: [YAML, DB,XORM,GORM,FORM],
  }, {
    ...Config,
    children: [Nested],
  }],
  select: [YAML.key],
  input: '',
  show: '',
  name: 'yaml',
  showHandler: yamlToGo,
  hasName: true,
  hasPrefix: true,
  annotations: [],
  structName: 'Go',
};

export default {
  namespace: 'yamlMapping',

  state: {
    ...innerState
  },

  reducers: {
    input(state, {payload}) {
      return onChange({...state, ...payload});
    },
  }
}
