
import createAssistant from './createAssistant'
import createForm from './createForm'
import createList from './createList'

export default interface serverWidget {
  AssistantSubmitAction: AssistantSubmitAction
  FieldBreakType: FieldBreakType
  FieldDisplayType: FieldDisplayType
  FieldLayoutType: FieldLayoutType
  FieldType: FieldType
  FormPageLinkType: FormPageLinkType
  LayoutJustification: LayoutJustification
  ListStyle: ListStyle
  SublistDisplayType: SublistDisplayType

  createAssistant: createAssistant
  createForm: createForm
  createList: createList
}
