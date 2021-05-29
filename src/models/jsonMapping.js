import jsonToGo from "@/services/json-to-go";
import { onChange } from "@/models/helpers";
import { ALL, JSON, DB, XORM,FORM,GORM, Config, Nested } from '@/services/js-options'

const innerState = {
  treeData: [{
    ...ALL,
    children: [JSON, DB,XORM,GORM,FORM],
  }, {
    ...Config,
    children: [Nested],
  }],
  select: [JSON.key],
  input: '',
  show: '',
  name: 'json',
  showHandler: jsonToGo,
  hasName: true,
  hasPrefix: true,
  annotations: [],
  structName: 'Go',
};

export default {
  namespace: 'jsonMapping',

  state: {
    ...innerState
  },

  reducers: {
    input(state, {payload}) {
      return onChange({...state, ...payload});
    },
  }
}
